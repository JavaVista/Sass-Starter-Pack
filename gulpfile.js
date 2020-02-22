const gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	autoprefixer = require('gulp-autoprefixer');

const stylePath = {
	styles: {
		src: 'src/scss/*.scss',
		dest: 'src/css',
	},
};

// compile sass and add autoprefixer
const style = () => {
	return gulp
		.src(stylePath.styles.src)
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(
			autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false,
			})
		)
		.pipe(gulp.dest(stylePath.styles.dest))
		.pipe(browserSync.stream());
};

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
	gulp.watch(stylePath.styles.src, style);
	gulp.watch('src/*.html').on('change', reload);
};

// expose tasks this allows to run in the command line using i.e. gulp style
// don't have to expose the reload function. It's currently only useful in other functions
exports.monitor = monitor;
exports.style = style;

// Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
const build = gulp.parallel(style, monitor);
gulp.task('build', build);

// TODO: scalable you can add more task here

// default
gulp.task('default', build);
