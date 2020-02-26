# Sass Starter Kit 💁

A light package for compiling Sass and running a web dev server environment. The scss folder has some examples of the power of Sass. Great way to quickly start frontend project.

## Version

1.1.1

## Instructions

Clone the repository

### Dependencies installation

`$ npm install`

To install the following dependencies gulp 4, gulp-sass, browser-sync & gulp-autoprefixer

### Run

`$ npm start`

This will monitor your Sass files and compile them into a CSS file. It will also launch the dev web server in your browser at the following url http://localhost:3000.


### Technologies Used

* HTML5
* CSS3
* Sass
* [Gulp](https://gulpjs.com/)
  * Gulp Plugins:
    * [Gulp-Sass](https://www.npmjs.com/package/gulp-sass) - compile sass to css
    * [Browsersync](https://browsersync.io/docs/gulp) - live Reload and keep multiple browsers & devices in sync
    * [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) - add vendor prefixes to the CSS
    * [gulp-postcss](https://github.com/postcss/gulp-postcss) - pipe CSS through several plugins, but parse CSS only once
    * [cssnano](https://cssnano.co/) - minify the CSS
    * [del](https://www.npmjs.com/package/del) - deletes all files
    * [gulp-rename](https://www.npmjs.com/package/gulp-rename) - simple file renaming
    * [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) -  to tell which file and line in your original code a part of minified code comes from
    * [gulp-concat](https://www.npmjs.com/package/gulp-concat) -  concatenates multiple JS files into one file
    * [browserify](http://browserify.org/) -  bundle modules into a single file (a bundle)
    * [babelify](https://www.npmjs.com/package/babelify) - babel browserify transform so that Browserify can use Babel to transform each file before bundling them up
    * [@babel/core](https://babeljs.io/docs/en/babel-core) - to use modern javascript in browsers we transpile the bundle into javascript understood by current and last-gen browsers
    * [@babel/preset-env](https://babeljs.io/docs/en/next/babel-preset-env.html) - babel smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms. Without setting a target it will default to transforming ECMAScript 2015+ code
    * [vinyl-source-stream](https://www.npmjs.com/package/vinyl-source-stream) - convert the readable stream you get from browserify into a vinyl stream and turns bundle into something which gulp understands to be able to write it to a file
* Javascript
* Node.js

## Acknowledgments

* [Brad Traversy](https://www.youtube.com/watch?v=rmXVmfx3rNo&t=105s)

## Contact / Social Media

* Twitter – [@seetechnologic](https://twitter.com/seetechnologic)
* GitHub - [https://github.com/JavaVista/](https://github.com/JavaVista/)
* Personal Site - [Resume](http://www.techno-logic.us/)
* LinkedIn - [Javier Carrion](https://www.linkedin.com/in/technologic)

### License

Distributed under the MIT License.

See [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)
for more information.
