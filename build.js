const fs = require("fs-extra");
const path = require("path");

const HTMLParser = require("node-html-parser");
const marked = require("marked");

const html = marked.parse(
  fs.readFileSync("README.md", {
    encoding: "utf8",
  })
);

fs.outputFileSync("./docs/index.html", html);

console.log("page created");
