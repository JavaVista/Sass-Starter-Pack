const gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	autoprefixer = require('gulp-autoprefixer');

/* src for all of your source files, pre-processed, un-minified, dist for the bundled and minified files - production files, and a tmp directory which will be used as the sandbox for our local web server, development files, pre-processed, un-minified. */

const paths = {
	src: 'src/**/*',
	styles: {
		src: 'src/**/*',
		srcHTML: 'src/**/*.html',
		srcSCSS: 'src/scss/*.scss',
		srcJS: 'src/**/*.js',
		tmp: 'tmp',
		tmpIndex: 'tmp/index.html',
		tmpCSS: 'tmp/css/',
		tmpJS: 'tmp/**/*.js',
		dist: 'dist',
		distIndex: 'dist/index.html',
		distCSS: 'dist/**/*.css',
		distJS: 'dist/**/*.js',
		dest: 'src/css',
	},
	web: {}
};

const html = () => {
	return gulp.src(paths.styles.srcHTML).pipe(gulp.dest(paths.styles.tmp));
}

// compile sass and add autoprefixer
const style = () => {
	return gulp
		.src(paths.styles.srcSCSS)
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(
			autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false,
			})
		)
		.pipe(gulp.dest(paths.styles.tmpCSS))
		.pipe(browserSync.stream());
};

const js = () => {
	return gulp.src(paths.styles.srcJS).pipe(gulp.dest(paths.styles.tmp));
}

// reload page
const reload = () => browserSync.reload();

// monitor & serve

const monitor = () => {
	browserSync.init({
		//use this directory and serve it as a mini-server
		server: {
			baseDir: './src',
			// if you serving locally using something like apache
			// use the proxy setting instead proxy: 'yourlocal.dev'
		},
	});
	gulp.watch(paths.src, html, style, js);
	gulp.watch('src/*.html').on('change', reload);
};

// expose tasks this allows to run in the command line using i.e. gulp style
// don't have to expose the reload function. It's currently only useful in other functions
exports.monitor = monitor;
exports.html = html;
exports.style = style;
exports.js = js;

// Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
const build = gulp.parallel(html, style, js);
gulp.task('build', build);

// TODO: scalable you can add more task here

// default
gulp.task('default', build);
