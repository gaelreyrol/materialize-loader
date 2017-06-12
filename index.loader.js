module.exports = function() {};

module.exports.pitch = function(remainingRequest) {
  var configFilePath = this.resourcePath || remainingRequest;
  this.cacheable(true);
  if (!configFilePath || configFilePath.trim() === "") {
    var msg =
      "You specified the materialize-loader with no configuration file. Please specify" +
      " the configuration file, like: 'materialize-loader!./materialize.config.js' or use" +
      " require('materialize-loader').";
    console.error("ERROR: " + msg);
    throw new Error(msg);
  }

  var config = require(configFilePath);
  var styleLoader = config.styleLoader || "style-loader!css-loader!sass-loader";

  var resolveStyleLoader = styleLoader
    .split("!")
    .map(loader => require.resolve(loader))
    .join("!");

  var styleLoaderCommand =
    "require(" +
    JSON.stringify(
      "-!" +
        resolveStyleLoader +
        "!" +
        require.resolve("./materialize-styles.loader.js") +
        "!" +
        configFilePath
    ) +
    ");";
  return styleLoaderCommand;
};
