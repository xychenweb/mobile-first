'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect'),
    livereload = require('gulp-livereload');

//style paths
var sassFiles = 'sass/**/*.scss',
    cssDest = 'css/';

gulp.task('webserver', function() {
  connect.server({
  	livereload: true
  });
});

gulp.task('styles', function() {
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest))
        .pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
    gulp.watch(sassFiles, ['styles']);
});

gulp.task('default', ['styles','webserver','watch']);
