var marko_template = module.exports = require("marko/html").t(__filename);

function render(input, out) {
  var data = input;

  if (true) {
    console.log("hello");
  }
}

marko_template._ = render;
