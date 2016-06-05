var gulp = require('gulp');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
gulp.task('wacth',()=>{
  browserSync.get('appReact').init({
    server: {
      baseDir: './build'
    }
  });
  watch('./src/*.js',()=> {
    gulp.start('transpire');
  });
});
