const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

// compile sass
gulp.task('sass', () => {
    return gulp.src(['src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

// monitor & serve
gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: './src'
    });
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/*.html']).on('change', browserSync.reload);
});

// TODO: scalable you can add more task here

// default
gulp.task('default', ['serve']);