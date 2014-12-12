/**
 * Created by skessler on 12/11/14.
 */


var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');



gulp.task('default', ['styles']);



gulp.task('styles', function() {
    return gulp.src('./app/app.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(gulp.dest('app/'));
});

gulp.task('test', function() {
    return gulp.src('./app/app.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('app/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('app/'))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
    return gulp.src('src/scripts/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('app/'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('test2', function() {
    return gulp.src('./**/**.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(gulp.dest('app/'));
});


gulp.task('watch', function() {

    gulp.watch('/**/*.scss', ['styles']);
});