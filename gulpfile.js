(function setupGulp() {

  'use strict';

  let gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    istanbul = require('gulp-istanbul'),
    jasmine = require('gulp-jasmine'),
    rename = require('gulp-rename'),
    config = require('./package.json');

  require('coffee-script/register');

  gulp.task('build-es5', () => gulp
      .src([
        'lib/index.js',
        'lib/**/*.js'
      ], {base: 'lib'})
      .pipe(sourcemaps.init())
      .pipe(babel({presets: ['es2015-script']}))
      .pipe(concat(config.main))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('.'))
    );

  gulp.task('build', ['build-es5'], () => gulp
      .src(config.main)
      .pipe(sourcemaps.init())
      .pipe(uglify({
        compress: {}
      }))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'))
  );

  gulp.task('test', ['build', 'pre-test'], () => gulp
    .src(['spec/**/*-spec.coffee'])
    .pipe(jasmine({verbose: true, coffee: true}))
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({thresholds: {global: 90}}))
  );

  gulp.task('pre-test', () => gulp
    .src(['lib/**/*.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
  );

}());
