/**
 * Created by skessler on 12/11/14.
 */


var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify');



    gulp.task('default', function() {

});

gulp.task('styles', function() {
    return gulp.src('./app/app.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(gulp.dest('app/'));
});

