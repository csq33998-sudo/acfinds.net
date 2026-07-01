const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4191);

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

function resolveRequest(url) {
  const pathname = decodeURIComponent(new URL(url, "http://127.0.0.1").pathname);
  const cleanPath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  let file = path.resolve(root, cleanPath);
  const relative = path.relative(root, file);

  if (relative.startsWith("..") || path.isAbsolute(relative) || relative.split(path.sep).some((part) => part.startsWith("."))) {
    return null;
  }

  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    file = path.join(file, "index.html");
  }

  if (!fs.existsSync(file) && path.extname(file) === "") {
    const htmlFile = `${file}.html`;
    if (fs.existsSync(htmlFile)) {
      file = htmlFile;
    }
  }

  if (!fs.existsSync(file) && cleanPath.startsWith("products/")) {
    file = path.join(root, "product.html");
  }

  if (!fs.existsSync(file) && cleanPath.startsWith("categories/")) {
    file = path.join(root, "category.html");
  }

  return file;
}

const server = http.createServer((req, res) => {
  const file = resolveRequest(req.url || "/");

  if (!file) {
    res.writeHead(403, { "content-type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  if (!fs.existsSync(file)) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const ext = path.extname(file).toLowerCase();
  res.writeHead(200, { "content-type": mime[ext] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Preview running at http://127.0.0.1:${port}/`);
});
