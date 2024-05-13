const fs = require("fs");
const path = require("path");

const ejs = require("ejs");
const hljs = require("highlight.js");
const marked = require("marked");

console.log("Building site...");

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  highlight: function (code, lang) {
    return hljs.highlightAuto(code).value;
  },
  langPrefix: "hljs language-",
});

fs.writeFileSync(
  path.join(__dirname, "../README.md"),
  fs.readFileSync(path.join(__dirname, "../src/github-header.md")) +
    fs.readFileSync(path.join(__dirname, "../src/dictionary.md"))
);

const html = getCompiledTemplate(
  path.join(__dirname, "../site/pages/dictionary-template.ejs")
)({
  data: marked.parse(
    fs.readFileSync(path.join(__dirname, "../src/dictionary.md"), {
      encoding: "utf8", // required
    })
  ),
});

fs.writeFileSync(path.join(__dirname, "../docs/index.html"), html);

console.log("Site built.");

function getCompiledTemplate(filePath) {
  return ejs.compile(
    fs.readFileSync(filePath, {
      encoding: "utf8",
    })
  );
}
