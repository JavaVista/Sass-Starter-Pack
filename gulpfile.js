const gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	autoprefixer = require('autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	cssnano = require('cssnano'),
	rename = require('gulp-rename'),
	del = require('del'),
	concat = require('gulp-concat'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	newer = require('gulp-newer'),
	inject = require('gulp-inject');

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
		srcJSFile: 'src/js/main',
		srcImg: 'src/assets/**/*',
	},
	out: {
		dist: 'dist',
		distIndex: 'dist/index.html',
		distCSS: 'dist/css/',
		distCSSFile: 'dist/css/**/*.css',
		distJS: 'dist/js/',
		distJSFile: 'dist/js/**/*.js',
		distImg: 'dist/assets/',
	},
};

const jsFiles = [paths.in.srcJSFile]; // add more js directories by adding to the array

const remove = () => {
	return del([paths.out.dist]);
};

const html = () => {
	return gulp.src(paths.in.srcHTML).pipe(gulp.dest(paths.out.dist));
};

// compile sass to css and add autoprefixer adds vendor prefixes to CSS
const styles = () => {
	return gulp
		.src(paths.in.srcSCSS)
		.pipe(sourcemaps.init()) // maps the CSS styles back to the original SCSS file
		.pipe(sass().on('error', sass.logError))
		.pipe(
			postcss([
				autoprefixer(), // add vendor prefixes to the CSS
				cssnano(), // file minify the CSS
			])
		)
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.out.distCSS))
		.pipe(browserSync.stream());
};

// bundle modules into a single file (a bundle)
const js = () => {
	return browserify({
		entries: [jsFiles],
		transform: [babelify.configure({ presets: ['@babel/preset-env'] })], // Pass babelify as a transform and set its preset to @babel/preset-env
	})
		.bundle()
		.pipe(source('script.min.js')) // turn bundle into something which gulp understands to be able to write it to a file
		.pipe(buffer()) // turn into a buffer
		.pipe(uglify()) // file minify the JS
		.pipe(gulp.dest(paths.out.distJS));
};

const img = () => {
	return gulp
		.src(paths.in.srcImg)
		.pipe(newer(paths.out.distImg)) // pass through newer images only
		.pipe(
			imagemin([
				imagemin.gifsicle({ interlaced: true }), // Interlace gif for progressive rendering
				imagemin.mozjpeg({ progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }), // levels 2 and higher enable multiple IDAT compression trials; the higher the level, the more trials
			])
		)
		.pipe(gulp.dest(paths.out.distImg));
};

// reload page
const reload = () => browserSync.reload();

// inject Javascript files and Stylesheet files into the index.html file
const injection = () => {
	let sources = gulp.src([paths.out.distJSFile, paths.out.distCSSFile], {
		read: false,
	}); // read only the path not the file
	let target = gulp.src(paths.out.distIndex);

	return target
		.pipe(inject(sources, { relative: true }))
		.pipe(gulp.dest(paths.out.dist, reload()));
};

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
const build = gulp.parallel(
	gulp.series(remove, html, styles, img, js, injection),
	monitor
);

// expose tasks it allows you to run in the command line "i.e. gulp style"
// don't have to expose the reload function. It's only useful in other functions
exports.html = html;
exports.styles = styles;
exports.js = js;
exports.img = img;
exports.remove = remove;
exports.injection = injection;
// default task just "gulp" in the command line and it runs all tasks in the build variable
exports.default = build;
