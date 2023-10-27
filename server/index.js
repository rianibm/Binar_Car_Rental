const http = require("http");
const { PORT = 8000 } = process.env;
const fs = require("fs");
const path = require("path");

const PUBLIC_DIRECTORY = path.join(__dirname, "..", "public");
const DATA_DIRECTORY = path.join(__dirname, "data");

function getHTML(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
  return fs.readFileSync(htmlFilePath, "UTF-8");
}

function getCSS(cssFileName) {
  const cssFilePath = path.join(PUBLIC_DIRECTORY, cssFileName);
  return fs.readFileSync(cssFilePath, "UTF-8");
}

function getJS(jsFileName) {
  const jsFilePath = path.join(PUBLIC_DIRECTORY, jsFileName);
  return fs.readFileSync(jsFilePath, "UTF-8");
}

function getJSON(jsonFileName) {
  const jsonFilePath = path.join(DATA_DIRECTORY, jsonFileName);
  return fs.readFileSync(jsonFilePath, "UTF-8");
}

function getImage(imageFileName) {
  const imageFilePath = path.join(PUBLIC_DIRECTORY, imageFileName);
  return fs.readFileSync(imageFilePath);
}

function onRequest(req, res) {
  console.log(req.url);

  if (req.url.endsWith(".css")) {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(getCSS(req.url));
  } else if (req.url.endsWith(".js")) {
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(getJS(req.url));
  } else if (req.url.match(/\.(png|jpg)$/)) {
    const contentType = req.url.endsWith(".png") ? "image/png" : "image/jpeg";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(getImage(req.url));
  } else if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(getHTML("homepage.html"));
  } else if (req.url === "/cariMobil.html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(getHTML("cariMobil.html"));
  } else if (req.url === "/cars.min.json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(getJSON("cars.min.json"));
  } else {
    console.log("File not found: " + req.url);
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(getHTML("404-error.html"));
  }
}

const server = http.createServer(onRequest);

server.listen(PORT, "", () => {
  console.log(`Server sudah berjalan, silahkan buka http://localhost:${PORT}`);
});
