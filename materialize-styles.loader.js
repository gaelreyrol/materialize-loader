var styles = ["materialize"];

module.exports = function (content) {
  this.cacheable(true);
  var config = this.exec(content, this.resourcePath);
  var start =
    '$roboto-font-path: "~materialize-css/dist/fonts/roboto/";\n' +
    '@import "~materialize-css/sass/components/_color.scss";\n' +
    '@import "./materialize.config.scss";\n';
  source =
    start +
    styles
      .filter(function (style) {
        return config.styles[style];
      })
      .map(function (style) {
        return '@import "~materialize-css/sass/' + style + '.scss";';
      })
      .join("\n");
  return source;
};
