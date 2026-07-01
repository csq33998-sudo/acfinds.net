param(
  [Parameter(Mandatory = $true)]
  [string]$Root,

  [Parameter(Mandatory = $true)]
  [int]$Port
)

Add-Type -AssemblyName System.Web

$resolvedRoot = [System.IO.Path]::GetFullPath($Root)
$resolvedRootWithSeparator = $resolvedRoot.TrimEnd([System.IO.Path]::DirectorySeparatorChar, [System.IO.Path]::AltDirectorySeparatorChar) + [System.IO.Path]::DirectorySeparatorChar
$address = [System.Net.IPAddress]::Parse("127.0.0.1")
$server = [System.Net.Sockets.TcpListener]::new($address, $Port)
$server.Start()

$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "application/javascript; charset=utf-8"
  ".xml" = "application/xml; charset=utf-8"
  ".txt" = "text/plain; charset=utf-8"
  ".png" = "image/png"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"
  ".svg" = "image/svg+xml"
}

function Send-Response($stream, $status, $contentType, [byte[]]$body) {
  $reason = if ($status -eq 200) { "OK" } elseif ($status -eq 403) { "Forbidden" } elseif ($status -eq 404) { "Not Found" } else { "Error" }
  $header = "HTTP/1.1 $status $reason`r`nContent-Type: $contentType`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
  $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
  $stream.Write($headerBytes, 0, $headerBytes.Length)
  $stream.Write($body, 0, $body.Length)
}

while ($true) {
  $client = $server.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $buffer = New-Object byte[] 4096
    $read = $stream.Read($buffer, 0, $buffer.Length)
    $request = [Text.Encoding]::ASCII.GetString($buffer, 0, $read)
    $requestLine = ($request -split "`r`n")[0]
    $parts = $requestLine -split " "

    if ($parts.Length -lt 2) {
      Send-Response $stream 500 "text/plain; charset=utf-8" ([Text.Encoding]::UTF8.GetBytes("Bad request"))
      continue
    }

    $requestPath = [System.Web.HttpUtility]::UrlDecode($parts[1].Split("?")[0].TrimStart("/"))
    if ([string]::IsNullOrWhiteSpace($requestPath)) {
      $requestPath = "index.html"
    }

    $file = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($resolvedRoot, $requestPath))
    $isInsideRoot = $file.Equals($resolvedRoot, [StringComparison]::OrdinalIgnoreCase) -or $file.StartsWith($resolvedRootWithSeparator, [StringComparison]::OrdinalIgnoreCase)
    $relativePath = if ($file.Equals($resolvedRoot, [StringComparison]::OrdinalIgnoreCase)) { "" } elseif ($isInsideRoot) { $file.Substring($resolvedRootWithSeparator.Length) } else { "" }
    $relativeParts = $relativePath.Split([System.IO.Path]::DirectorySeparatorChar, [System.IO.Path]::AltDirectorySeparatorChar)

    if (-not $isInsideRoot -or ($relativeParts | Where-Object { $_.StartsWith(".") })) {
      Send-Response $stream 403 "text/plain; charset=utf-8" ([Text.Encoding]::UTF8.GetBytes("Forbidden"))
      continue
    }

    if ([System.IO.Directory]::Exists($file)) {
      $file = [System.IO.Path]::Combine($file, "index.html")
    }

    if (-not [System.IO.File]::Exists($file)) {
      $htmlFallback = "$file.html"
      if ([System.IO.File]::Exists($htmlFallback)) {
        $file = $htmlFallback
      } elseif ($requestPath.StartsWith("products/")) {
        $file = [System.IO.Path]::Combine($resolvedRoot, "product.html")
      } else {
        Send-Response $stream 404 "text/plain; charset=utf-8" ([Text.Encoding]::UTF8.GetBytes("Not found"))
        continue
      }
    }

    $bytes = [System.IO.File]::ReadAllBytes($file)
    $ext = [System.IO.Path]::GetExtension($file).ToLowerInvariant()
    $contentType = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { "application/octet-stream" }
    Send-Response $stream 200 $contentType $bytes
  } catch {
    try {
      Send-Response $stream 500 "text/plain; charset=utf-8" ([Text.Encoding]::UTF8.GetBytes("Server error"))
    } catch {}
  } finally {
    $client.Close()
  }
}
