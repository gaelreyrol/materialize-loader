var styles = [
    'materialize'
];

module.exports = function(content) {
    this.cacheable(true);
    var config = this.exec(content, this.resourcePath);
    source = styles.filter(function(style) {
        return config.styles[style];
    }).map(function(style) {
        return "@import \"~materialize-css/scss/" + style + ".scss\";";
    }).join("\n");
    return source;
};
