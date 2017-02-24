/**
 * Created by santosh on 2/24/17.
 */
var gulp = require('gulp');


gulp.task('task1', function(){
   console.log("Hello Task1");
});


gulp.task('watch', function(){
   gulp.watch('src/*.js', ['task1']);
});

gulp.task('default', ['watch']);

