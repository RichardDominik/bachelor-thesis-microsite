const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const minifyJs = require('gulp-minify');
const imagemin = require('gulp-imagemin');

gulp.task('minify-css', () => {
    return gulp.src('./*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public'));
});

gulp.task('minify-html', () => {
    return gulp.src('./*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('public'));
});

gulp.task('minify-js', function() {
    return gulp.src('./app.js')
      .pipe(minifyJs())
      .pipe(gulp.dest('public'))
});

gulp.task('minify-images', function() {
    return gulp.src('assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/assets/img'))
});

gulp.task('default', function() {
    gulp.watch('./*.css', function(e) {
        gulp.task('minify-css');
    });

    gulp.watch('./*.html', function(e) {
        gulp.task('minify-html');
    });

    gulp.watch('./*.js', function(e) {
        gulp.task('minify-js');
    });

    gulp.watch('assets/img/*', function(e) {
        gulp.task('minify-images');
    });
});