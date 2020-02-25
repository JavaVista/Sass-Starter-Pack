const gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	autoprefixer = require('autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	cssnano = require('cssnano'),
	rename = require('gulp-rename');

/*
src - source files, pre-processed, un-minified.
dist - production files, processed, minified. Used as the sandbox for browserSync local web server
*/

// Globbing patterns - *.scss: The * is a wildcard that matches any file ending with “.scss” in directory.
// "**/*.scss" matches any file ending with .scss in root folder & any child directories.

const paths = {
	in: {
		src: 'src/**/*',
		srcHTML: 'src/**/*.html',
		srcSCSS: 'src/scss/**/*.scss',
		srcJS: 'src/js/**/*.js',
	},
	out: {
		dist: 'dist',
		distIndex: 'dist/index.html',
		distCSS: 'dist/css/',
		distJS: 'dist/js/',
	},
};

const html = () => {
	return gulp.src(paths.in.srcHTML).pipe(gulp.dest(paths.out.dist));
};

// compile sass to css and add autoprefixer adds vendor prefixes to CSS
const styles = () => {
	return gulp
		.src(paths.in.srcSCSS)
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.init()) // maps the CSS styles back to the original SCSS file
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(
			postcss([
				autoprefixer(), // add vendor prefixes to the CSS
				cssnano(), // minify the CSS file
			])
		)
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.out.distCSS))
		.pipe(browserSync.stream());
};

const js = () => {
	return gulp.src(paths.in.srcJS).pipe(gulp.dest(paths.out.distJS));
};

// reload page
const reload = () => browserSync.reload();

// watch files & serve

const monitor = () => {
	browserSync.init({
		//use this directory and serve it as a mini-server
		server: {
			baseDir: './dist',
			// if you serving locally using something like apache
			// use the proxy setting instead "proxy: 'your_local.dev'"
		},
	});
	gulp.watch(paths.in.srcJS, js).on('change', reload);
	gulp.watch(paths.in.srcSCSS, styles);
	gulp.watch(paths.in.srcHTML, html).on('change', reload);
};

// Specify if tasks run in series or parallel using "gulp.series" and "gulp.parallel"
const build = gulp.parallel(html, styles, js, monitor);

// expose tasks it allows you to run in the command line "i.e. gulp style"
// don't have to expose the reload function. It's only useful in other functions
exports.html = html;
exports.styles = styles;
exports.js = js;
// default task just "gulp" in the command line and it runs all tasks in the build variable
exports.default = build;
