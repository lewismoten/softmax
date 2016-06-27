(function setupGulp() {

  'use strict';

  let gulp = require('gulp'),
    jasmine = require('gulp-jasmine');

  require('coffee-script/register');

  gulp.task('test', () => gulp
    .src(['spec/**/*-spec.coffee'])
    .pipe(jasmine({verbose: true, coffee: true}))
  );

}());
