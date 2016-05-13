module.exports = function() {
};

module.exports.pitch = function (remainingRequest) {
  // Webpack 1.7.3 uses this.resourcePath. Leaving in remaining request for possibly older versions
  // of Webpack
  var configFilePath = this.resourcePath || remainingRequest;
  this.cacheable(true);
  if (!configFilePath || configFilePath.trim() === '') {
    var msg = 'You specified the materialize-loader with no configuration file. Please specify' +
      ' the configuration file, like: \'materialize-loader!./materialize.config.js\'';
    console.error('ERROR: ' + msg);
    throw new Error(msg);
  }

  var config = require(configFilePath);
  var styleLoader = config.styleLoader || 'style-loader!css-loader!sass-loader';
  if (process.env.NODE_ENV === 'production') {
    var ExtractTextPlugin = require('extract-text-webpack-plugin');
    styleLoader = ExtractTextPlugin.extract('style', 'css!sass');
  }

  var styleLoaderCommand = 'require(' + JSON.stringify('-!' + styleLoader + '!' +
      require.resolve('./materialize-styles.loader.js') + '!' + configFilePath) + ');';
  return styleLoaderCommand;
};
