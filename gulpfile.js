let gulp = require('gulp'),
    minifycss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify');

gulp.task('script', function() {
    return gulp.src([
        js('wysiwyg'),
        js('wysiwyg-editor'),
        js('kneditor')
    ]).pipe(uglify())
    .pipe(concat('kneditor.min.js'))
    .pipe(gulp.dest('./js'))
    .pipe(notify({ message: 'script task complete' }));
});
gulp.task('style', function() {
    return gulp.src([
        css('font-awesome.min'),
        css('wysiwyg-editor')
    ]).pipe(minifycss())
    .pipe(concat('kneditor.min.css'))
    .pipe(gulp.dest('./css'))
    .pipe(notify({ message: 'style task complete' }));
});

function js(name) {
    return './js/src/' + name + '.js';
}
function css(name) {
    return './css/src/' + name + '.css';
}