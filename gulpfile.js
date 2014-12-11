/**
 * Created by skessler on 12/11/14.
 */


var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
});

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});