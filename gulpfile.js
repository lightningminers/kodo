var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserCreate = browserSync.create();

var watchMap = [
  './dist/*.js',
  './examples/**/*.*'
];
gulp.task('server',function(){
  browserCreate.init({
    server:'./examples/www/'
  });
  gulp.watch(watchMap,function(file){
    console.log(file.path);
    browserCreate.reload();
  });
});
