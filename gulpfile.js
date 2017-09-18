'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
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
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function() {
    gulp.watch(sassFiles, ['styles']);
});

gulp.task('default', ['styles','webserver','watch']);
