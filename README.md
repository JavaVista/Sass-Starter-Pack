# Sass Starter Kit 💁

A light package for compiling Sass and running a web dev server environment. The scss folder has some examples of the power of Sass. The kit includes the gulp toolkit for automating  painful or time-consuming tasks in your development workflow. A great way to quickly start a frontend project.

## Version

1.1.2

### Screenshot

![Sass Website](/SassSite.png)

## Instructions

Clone the repository

### Dependencies installation

`$ npm install`

To install the following dependencies gulp 4, gulp-sass, browser-sync & gulp-autoprefixer

### Run

`$ npm start`

This will monitor your Sass files and compile them into a CSS file. It will also launch the dev web server in your browser at the following url http://localhost:3000.

## Alternative Instructions

Alternatively you can independently run your own project

1. Create an empty directory and copy the `src` folder, `.gitignore`  and `gulpfile.js` from this repo.

2. `$ cd` to the directory.

3. Initialize you own project to create the package.json. In the terminal enter the following.

    `$ npm init -y`

    * The -y flag will let you use the defaults instead of asking questions about the new project.

4. Install the necessary dependencies

    `$ npm install --save-dev @babel/core @babel/preset-env autoprefixer babelify browser-sync browserify cssnano del gulp gulp-concat gulp-imagemin gulp-inject gulp-newer gulp-postcss gulp-rename gulp-sass gulp-sourcemaps gulp-uglify vinyl-buffer vinyl-source-stream`

5. Initialize your repository

    `$ git init`

6. Run

    `$ gulp`

7. And your all set with the starter pack.

## Technology

* HTML5
* CSS3
* Sass
* [Gulp](https://gulpjs.com/)
  * Gulp Plugins and npm Packages:
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
    * [vinyl-source-stream](https://www.npmjs.com/package/vinyl-source-stream) - convert the readable stream you get from browserify into a vinyl (Vinyl is a very simple metadata object that describes a file. A virtual file format) stream and turns bundle into something which gulp understands to be able to write it to a file
    * [vinyl-buffer](https://www.npmjs.com/package/vinyl-buffer) - Convert streaming vinyl files to use buffers
    * [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) - minify the JS
    * [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) - minify the Images
    * [gulp-newer](https://www.npmjs.com/package/gulp-newer) - passes source files that are newer than corresponding destination
    * [gulp-inject](https://www.npmjs.com/package/gulp-inject) -  inject JS and CSS files into the HTML
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
