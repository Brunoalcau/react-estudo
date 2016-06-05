var gulp = require('gulp');
var babel = require('gulp-babel');
var reload = require('browser-sync').get('appReact').reload;
var notify = require('gulp-notify');

var notifyErro = function(error){
  ;
};

gulp.task('transpire',()=>{

  gulp.src('src/*.js')
  .pipe(babel({
    presets: ['react']
  }))
  .on('error',(error)=>{
    console.log(error);
    notify('Erro no transpire');
  })
  .pipe(gulp.dest('build/js'))
  .pipe(reload({stream:true}));
});
