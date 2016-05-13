materialize-loader
====================

Materialize configuration and loading package for webpack, using materialize-css (Sass).

Based on bootstrap-webpack by Scott Bleck (@bline).

Usage
-----

To properly load materialize-css, you need to configure loaders in your `webpack.config.js`. Example:

``` javascript
module.exports = {
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
    ]
  }
};
```

### Custom configuration

You can configurate materialize-loader with two configuration files:

* `materialize.config.js`
* `materialize.config.scss`

Add both files *next to each other* in your project. Then:

``` javascript
require("materialize!./path/to/materialize.config.js");
```

Or simple add it as entry point to your `webpack.config.js`:

``` javascript
module.exports = {
  entry: [
    "materialize!./path/to/materialize.config.js",
    "your-existing-entry-point"
  ]
};
```

#### `materialize.config.js`

Example:

``` javascript
module.exports = {
  styles: {
    "main": true,
  }
};
```

#### `materialize.config.scss`

Imported after Materialize's default variables, but before anything else.

You may customize Relacss here.

Example:

``` sass
$logo-green: green;
```
