/**
 * Created by santosh on 2/24/17.
 */
var gulp = require('gulp');
var pump = require('pump');
var babel = require('gulp-babel');


gulp.task('gulp-babel', function(){
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist-gulp'));
});


// task handle exception
gulp.task('gulp-babel-he', function(cb){
   pump([gulp.src('src/**/*.js'),
       babel({
           presets: ['es2015']
       }),
       gulp.dest('dist-gulp')
       ], cb);
});


gulp.task('watch', function(){
   gulp.watch('src/**/*.js', ['gulp-babel-he'])
});


gulp.task('default', ['watch']);

