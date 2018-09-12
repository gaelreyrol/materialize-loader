# materialize-loader

[![npm (scoped with tag)](https://img.shields.io/npm/v/materialize-loader/latest.svg?style=flat-square)](https://npmjs.com/package/materialize-loader)
[![npm](https://img.shields.io/npm/dt/materialize-loader.svg?style=flat-square)](https://npmjs.com/package/materialize-loader)
[![Dependencies](https://david-dm.org/Zevran/materialize-loader/status.svg?style=flat-square)](https://david-dm.org/Zevran/materialize-loader)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Materialize configuration and loading package for webpack 2, using materialize-css (Sass).

Based on bootstrap-webpack by Scott Bleck (@bline) and font-awesome-webpack by Gowrav Shekar (@gowravshekar).

## Usage

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

```bash
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
