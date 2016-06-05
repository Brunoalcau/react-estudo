var requireDir = require('require-dir');
var gulp = require('gulp');
var browserSync = require('browser-sync');
browserSync.create('appReact');
requireDir('gulp');


gulp.task('default',['transpire','wacth']);
