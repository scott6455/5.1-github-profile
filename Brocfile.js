var handlebars = require('broccoli-handlebars-precompiler');
var merge = require('broccoli-merge-trees');
var sass = require('broccoli-sass');
var concat = require('broccoli-sourcemap-concat');

var vendorJs = concat('bower_components', {
  inputFiles: [
    'jquery/dist/jquery.min.js',
    'handlebars/handlebars.min.js',
  ],
  outputFile: 'vendor.js'
});

var appJs = concat('assets', {
  inputFiles: [
    'js/app.js',
    /* Your app files here */
  ],
  outputFile: 'app.js'
});

var sassDirs = [
  'assets/scss',
  'bower_components/reset-css',
  'bower_components/bourbon/app/assets/stylesheets',
  'bower_components/neat/app/assets/stylesheets'
];

var appCss = sass(sassDirs, 'app.scss', 'app.css');

module.exports = merge([appJs, vendorJs, appCss, 'public']);
