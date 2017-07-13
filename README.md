materialize-loader
====================

[![Package Quality](http://npm.packagequality.com/badge/materialize-loader.png)](http://packagequality.com/#?package=materialize-loader)
[![Dependency Status](https://david-dm.org/zevran/materialize-loader.svg)](https://david-dm.org/zevran/materialize-loader)
[![Known Vulnerabilities](https://snyk.io/test/npm/materialize-loader/badge.svg)](https://snyk.io/test/npm/materialize-loader)

Materialize configuration and loading package for webpack 2, using materialize-css (Sass).

Based on bootstrap-webpack by Scott Bleck (@bline) and font-awesome-webpack by Gowrav Shekar (@gowravshekar).

Usage
-----

To properly load materialize-css, you need to configure loaders in your `webpack.config.js`. Example:

``` javascript
module.exports = {
  module: {
    loaders: [
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ]
  }
};
```

Don't forget to install appropriated loaders

```
npm install --save-dev url-loader file-loader
```

### Complete Materialize

To use the complete Materialize package including all styles with the default settings:

``` javascript
require("materialize-loader");
```

### Custom configuration

You can configurate materialize-loader with two configuration files:

* `materialize.config.js`
* `materialize.config.scss`

Add both files *next to each other* in your project. Then:

``` javascript
require('materialize-loader!./path/to/materialize.config.js');
```

Or simple add it as entry point to your `webpack.config.js`:

``` javascript
module.exports = {
  entry: [
    'materialize-loader!./path/to/materialize.config.js',
    'your-existing-entry-point'
  ]
};
```

#### `materialize.config.js`

Example:

``` javascript
module.exports = {
  styles: {
    'materialize': true,
  }
};
```

#### `materialize.config.scss`

Imported after Materialize's default variables, but before anything else.

You may customize Materialize here.

Example:

``` scss
$primary-color: color("blue-grey", "lighten-2");
$primary-color-light: lighten($primary-color, 15%);
$primary-color-dark: darken($primary-color, 15%);
```
