const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

const languageNames = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português"
};

const translations = {
  es: {
    "Skip to content": "Saltar al contenido",
    "AllChinaBuy Spreadsheet": "Hoja de AllChinaBuy",
    "AllChinaBuy Finds": "Hallazgos AllChinaBuy",
    "Home": "Inicio",
    "Spreadsheet": "Hoja",
    "Categories": "Categorías",
    "Sneakers": "Zapatillas",
    "QC Guide": "Guía QC",
    "Shipping": "Envío",
    "Size Guide": "Guía de tallas",
    "Guides": "Guías",
    "FAQ": "Preguntas",
    "English": "Inglés",
    "Paste product name or link": "Pega el nombre o enlace del producto",
    "Paste Product Name / Link": "Pega el nombre o enlace del producto",
    "Search": "Buscar",
    "AllChinaBuy Spreadsheet Finds and Links": "Hallazgos y enlaces de AllChinaBuy Spreadsheet",
    "Search streetwear finds, compare categories, and check QC details before building your haul": "Busca hallazgos de streetwear, compara categorías y revisa QC antes de preparar tu haul",
    "1.Place Order": "1. Hacer pedido",
    "Paste link, submit": "Pega el enlace y envía",
    "2.QC & Free Warehousing": "2. QC y almacén gratis",
    "QC photos, free storage.": "Fotos QC y almacenamiento gratis.",
    "3.Global Shipping": "3. Envío global",
    "Discounted routes worldwide.": "Rutas con descuento en todo el mundo.",
    "Browse by Category": "Explorar por categoría",
    "People also search": "La gente también busca",
    "What an AllChinaBuy spreadsheet is used for": "Para qué se usa una hoja de AllChinaBuy",
    "Popular topic entry points": "Entradas populares por tema",
    "Topic": "Tema",
    "Guide": "Guía",
    "Open ->": "Abrir ->",
    "AllChinaBuy spreadsheet keyword meanings": "Significado de palabras clave AllChinaBuy spreadsheet",
    "Phrase": "Frase",
    "Usually refers to": "Suele referirse a",
    "What to do next": "Qué hacer después",
    "Common mistakes": "Errores comunes",
    "Related pages on this site": "Páginas relacionadas",
    "Trust": "Confianza",
    "Educational content only. Verify listings yourself before purchase. Trademarks belong to their owners.": "Contenido educativo únicamente. Verifica los anuncios antes de comprar. Las marcas pertenecen a sus propietarios.",
    "Independent guide. Not affiliated with AllChinaBuy or listed brands.": "Guía independiente. No afiliada a AllChinaBuy ni a las marcas listadas.",
    "Spreadsheet categories": "Categorías de la hoja",
    "AllChinaBuy spreadsheet categories for streetwear finds": "Categorías de AllChinaBuy spreadsheet para hallazgos streetwear",
    "Browse Sneaker Finds": "Explorar zapatillas",
    "Browse Hoodie Finds": "Explorar hoodies",
    "Browse Jacket Finds": "Explorar chaquetas",
    "Browse Pants Finds": "Explorar pantalones",
    "Browse Accessory Finds": "Explorar accesorios",
    "Buying guide": "Guía de compra",
    "How to use an AllChinaBuy spreadsheet": "Cómo usar una hoja de AllChinaBuy",
    "Open StreetStyle Maison Looks": "Abrir StreetStyle Maison Looks",
    "Comparison": "Comparación",
    "AllChinaBuy spreadsheet vs random agent links": "AllChinaBuy spreadsheet frente a enlaces aleatorios de agente",
    "View Curated Finds": "Ver hallazgos curados",
    "AllChinaBuy spreadsheet questions": "Preguntas sobre AllChinaBuy spreadsheet",
    "Updates": "Actualizaciones",
    "AllChinaBuy spreadsheet link updates and corrections": "Actualizaciones y correcciones de enlaces AllChinaBuy spreadsheet",
    "Open StreetStyle Maison Looks": "Abrir StreetStyle Maison Looks"
  },
  fr: {
    "Skip to content": "Aller au contenu",
    "AllChinaBuy Spreadsheet": "Tableur AllChinaBuy",
    "AllChinaBuy Finds": "Trouvailles AllChinaBuy",
    "Home": "Accueil",
    "Spreadsheet": "Tableur",
    "Categories": "Catégories",
    "Sneakers": "Sneakers",
    "QC Guide": "Guide QC",
    "Shipping": "Expédition",
    "Size Guide": "Guide des tailles",
    "Guides": "Guides",
    "FAQ": "FAQ",
    "English": "Anglais",
    "Paste product name or link": "Collez le nom ou le lien du produit",
    "Paste Product Name / Link": "Collez le nom ou le lien du produit",
    "Search": "Rechercher",
    "AllChinaBuy Spreadsheet Finds and Links": "Trouvailles et liens du tableur AllChinaBuy",
    "Search streetwear finds, compare categories, and check QC details before building your haul": "Recherchez des trouvailles streetwear, comparez les catégories et vérifiez le QC avant de préparer votre haul",
    "1.Place Order": "1. Passer commande",
    "Paste link, submit": "Collez le lien et envoyez",
    "2.QC & Free Warehousing": "2. QC et stockage gratuit",
    "QC photos, free storage.": "Photos QC et stockage gratuit.",
    "3.Global Shipping": "3. Expédition mondiale",
    "Discounted routes worldwide.": "Routes à tarif réduit dans le monde entier.",
    "Browse by Category": "Parcourir par catégorie",
    "People also search": "Recherches associées",
    "What an AllChinaBuy spreadsheet is used for": "À quoi sert un tableur AllChinaBuy",
    "Popular topic entry points": "Points d'entrée populaires",
    "Topic": "Sujet",
    "Guide": "Guide",
    "Open ->": "Ouvrir ->",
    "AllChinaBuy spreadsheet keyword meanings": "Signification des mots-clés AllChinaBuy spreadsheet",
    "Phrase": "Expression",
    "Usually refers to": "Désigne généralement",
    "What to do next": "Étape suivante",
    "Common mistakes": "Erreurs courantes",
    "Related pages on this site": "Pages liées sur ce site",
    "Trust": "Confiance",
    "Educational content only. Verify listings yourself before purchase. Trademarks belong to their owners.": "Contenu éducatif uniquement. Vérifiez les annonces avant achat. Les marques appartiennent à leurs propriétaires.",
    "Independent guide. Not affiliated with AllChinaBuy or listed brands.": "Guide indépendant. Non affilié à AllChinaBuy ni aux marques citées.",
    "Spreadsheet categories": "Catégories du tableur",
    "AllChinaBuy spreadsheet categories for streetwear finds": "Catégories AllChinaBuy spreadsheet pour trouvailles streetwear",
    "Browse Sneaker Finds": "Parcourir les sneakers",
    "Browse Hoodie Finds": "Parcourir les hoodies",
    "Browse Jacket Finds": "Parcourir les vestes",
    "Browse Pants Finds": "Parcourir les pantalons",
    "Browse Accessory Finds": "Parcourir les accessoires",
    "Buying guide": "Guide d'achat",
    "How to use an AllChinaBuy spreadsheet": "Comment utiliser un tableur AllChinaBuy",
    "Open StreetStyle Maison Looks": "Ouvrir StreetStyle Maison Looks",
    "Comparison": "Comparaison",
    "AllChinaBuy spreadsheet vs random agent links": "AllChinaBuy spreadsheet face aux liens d'agent aléatoires",
    "View Curated Finds": "Voir les trouvailles organisées",
    "AllChinaBuy spreadsheet questions": "Questions sur AllChinaBuy spreadsheet",
    "Updates": "Mises à jour",
    "AllChinaBuy spreadsheet link updates and corrections": "Mises à jour et corrections des liens AllChinaBuy spreadsheet"
  },
  de: {
    "Skip to content": "Zum Inhalt springen",
    "AllChinaBuy Spreadsheet": "AllChinaBuy Tabelle",
    "AllChinaBuy Finds": "AllChinaBuy Funde",
    "Home": "Start",
    "Spreadsheet": "Tabelle",
    "Categories": "Kategorien",
    "Sneakers": "Sneaker",
    "QC Guide": "QC-Guide",
    "Shipping": "Versand",
    "Size Guide": "Größenguide",
    "Guides": "Anleitungen",
    "FAQ": "FAQ",
    "English": "Englisch",
    "Paste product name or link": "Produktname oder Link einfügen",
    "Paste Product Name / Link": "Produktname oder Link einfügen",
    "Search": "Suchen",
    "AllChinaBuy Spreadsheet Finds and Links": "AllChinaBuy Spreadsheet Funde und Links",
    "Search streetwear finds, compare categories, and check QC details before building your haul": "Suche Streetwear-Funde, vergleiche Kategorien und prüfe QC-Details vor deinem Haul",
    "1.Place Order": "1. Bestellung aufgeben",
    "Paste link, submit": "Link einfügen und senden",
    "2.QC & Free Warehousing": "2. QC und kostenloses Lager",
    "QC photos, free storage.": "QC-Fotos und kostenloses Lager.",
    "3.Global Shipping": "3. Weltweiter Versand",
    "Discounted routes worldwide.": "Vergünstigte Routen weltweit.",
    "Browse by Category": "Nach Kategorie suchen",
    "People also search": "Ähnliche Suchanfragen",
    "What an AllChinaBuy spreadsheet is used for": "Wofür eine AllChinaBuy Tabelle genutzt wird",
    "Popular topic entry points": "Beliebte Einstiege",
    "Topic": "Thema",
    "Guide": "Anleitung",
    "Open ->": "Öffnen ->",
    "AllChinaBuy spreadsheet keyword meanings": "Bedeutung der AllChinaBuy Spreadsheet Keywords",
    "Phrase": "Phrase",
    "Usually refers to": "Bezieht sich meist auf",
    "What to do next": "Nächster Schritt",
    "Common mistakes": "Häufige Fehler",
    "Related pages on this site": "Verwandte Seiten",
    "Trust": "Vertrauen",
    "Educational content only. Verify listings yourself before purchase. Trademarks belong to their owners.": "Nur Bildungsinhalt. Prüfe Listings vor dem Kauf selbst. Marken gehören ihren Eigentümern.",
    "Independent guide. Not affiliated with AllChinaBuy or listed brands.": "Unabhängiger Guide. Nicht mit AllChinaBuy oder genannten Marken verbunden.",
    "Spreadsheet categories": "Tabellen-Kategorien",
    "AllChinaBuy spreadsheet categories for streetwear finds": "AllChinaBuy Spreadsheet Kategorien für Streetwear-Funde",
    "Browse Sneaker Finds": "Sneaker-Funde ansehen",
    "Browse Hoodie Finds": "Hoodie-Funde ansehen",
    "Browse Jacket Finds": "Jacken-Funde ansehen",
    "Browse Pants Finds": "Hosen-Funde ansehen",
    "Browse Accessory Finds": "Accessoire-Funde ansehen",
    "Buying guide": "Kaufanleitung",
    "How to use an AllChinaBuy spreadsheet": "So nutzt du eine AllChinaBuy Tabelle",
    "Open StreetStyle Maison Looks": "StreetStyle Maison Looks öffnen",
    "Comparison": "Vergleich",
    "AllChinaBuy spreadsheet vs random agent links": "AllChinaBuy Spreadsheet vs zufällige Agent-Links",
    "View Curated Finds": "Kuratierte Funde ansehen",
    "AllChinaBuy spreadsheet questions": "Fragen zu AllChinaBuy Spreadsheet",
    "Updates": "Updates",
    "AllChinaBuy spreadsheet link updates and corrections": "Updates und Korrekturen für AllChinaBuy Spreadsheet Links"
  },
  pt: {
    "Skip to content": "Ir para o conteúdo",
    "AllChinaBuy Spreadsheet": "Planilha AllChinaBuy",
    "AllChinaBuy Finds": "Achados AllChinaBuy",
    "Home": "Início",
    "Spreadsheet": "Planilha",
    "Categories": "Categorias",
    "Sneakers": "Tênis",
    "QC Guide": "Guia QC",
    "Shipping": "Envio",
    "Size Guide": "Guia de tamanhos",
    "Guides": "Guias",
    "FAQ": "FAQ",
    "English": "Inglês",
    "Paste product name or link": "Cole o nome ou link do produto",
    "Paste Product Name / Link": "Cole o nome ou link do produto",
    "Search": "Buscar",
    "AllChinaBuy Spreadsheet Finds and Links": "Achados e links da planilha AllChinaBuy",
    "Search streetwear finds, compare categories, and check QC details before building your haul": "Busque achados streetwear, compare categorias e confira QC antes de montar seu haul",
    "1.Place Order": "1. Fazer pedido",
    "Paste link, submit": "Cole o link e envie",
    "2.QC & Free Warehousing": "2. QC e armazenagem grátis",
    "QC photos, free storage.": "Fotos QC e armazenagem grátis.",
    "3.Global Shipping": "3. Envio global",
    "Discounted routes worldwide.": "Rotas com desconto no mundo todo.",
    "Browse by Category": "Navegar por categoria",
    "People also search": "As pessoas também pesquisam",
    "What an AllChinaBuy spreadsheet is used for": "Para que serve uma planilha AllChinaBuy",
    "Popular topic entry points": "Entradas populares por tema",
    "Topic": "Tema",
    "Guide": "Guia",
    "Open ->": "Abrir ->",
    "AllChinaBuy spreadsheet keyword meanings": "Significado das palavras-chave AllChinaBuy spreadsheet",
    "Phrase": "Frase",
    "Usually refers to": "Geralmente se refere a",
    "What to do next": "O que fazer depois",
    "Common mistakes": "Erros comuns",
    "Related pages on this site": "Páginas relacionadas",
    "Trust": "Confiança",
    "Educational content only. Verify listings yourself before purchase. Trademarks belong to their owners.": "Conteúdo educativo apenas. Verifique os anúncios antes de comprar. As marcas pertencem aos seus donos.",
    "Independent guide. Not affiliated with AllChinaBuy or listed brands.": "Guia independente. Não afiliado à AllChinaBuy nem às marcas listadas.",
    "Spreadsheet categories": "Categorias da planilha",
    "AllChinaBuy spreadsheet categories for streetwear finds": "Categorias da planilha AllChinaBuy para achados streetwear",
    "Browse Sneaker Finds": "Ver achados de tênis",
    "Browse Hoodie Finds": "Ver achados de hoodies",
    "Browse Jacket Finds": "Ver achados de jaquetas",
    "Browse Pants Finds": "Ver achados de calças",
    "Browse Accessory Finds": "Ver achados de acessórios",
    "Buying guide": "Guia de compra",
    "How to use an AllChinaBuy spreadsheet": "Como usar uma planilha AllChinaBuy",
    "Open StreetStyle Maison Looks": "Abrir StreetStyle Maison Looks",
    "Comparison": "Comparação",
    "AllChinaBuy spreadsheet vs random agent links": "AllChinaBuy spreadsheet vs links aleatórios de agente",
    "View Curated Finds": "Ver achados curados",
    "AllChinaBuy spreadsheet questions": "Perguntas sobre AllChinaBuy spreadsheet",
    "Updates": "Atualizações",
    "AllChinaBuy spreadsheet link updates and corrections": "Atualizações e correções de links AllChinaBuy spreadsheet"
  }
};

const languageSelects = document.querySelectorAll('select[aria-label="Language"]');
const textNodeSources = new WeakMap();

function translateTextNode(node, lang) {
  if (!textNodeSources.has(node)) {
    textNodeSources.set(node, node.nodeValue.trim());
  }

  const source = textNodeSources.get(node);
  if (!source) return;

  const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
  const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
  const translated = lang === "en" ? source : translations[lang]?.[source] || source;
  node.nodeValue = `${leading}${translated}${trailing}`;
}

function translateAttributes(lang) {
  document.querySelectorAll("[placeholder], [aria-label]").forEach((element) => {
    ["placeholder", "aria-label"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;

      const key = `i18n${attribute.replace(/[^a-z0-9]/gi, "")}`;
      if (!element.dataset[key]) {
        element.dataset[key] = element.getAttribute(attribute);
      }

      const source = element.dataset[key];
      const translated = lang === "en" ? source : translations[lang]?.[source] || source;
      element.setAttribute(attribute, translated);
    });
  });
}

function applyLanguage(lang) {
  const activeLanguage = translations[lang] || lang === "en" ? lang : "en";
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => translateTextNode(node, activeLanguage));
  translateAttributes(activeLanguage);

  languageSelects.forEach((select) => {
    select.value = activeLanguage;
    select.querySelectorAll("option").forEach((option) => {
      option.textContent = languageNames[option.value] || option.textContent;
    });
  });

  document.documentElement.lang = activeLanguage;

  try {
    localStorage.setItem("site-language", activeLanguage);
  } catch {}
}

let savedLanguage = "en";
try {
  savedLanguage = localStorage.getItem("site-language") || "en";
} catch {}

applyLanguage(savedLanguage);

languageSelects.forEach((select) => {
  select.addEventListener("change", () => applyLanguage(select.value));
});
