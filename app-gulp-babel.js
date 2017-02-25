/**
 * Created by santosh on 2/24/17.
 */
var gulp = require('gulp');
var pump = require('pump');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');



gulp.task('gulp-babel', function(){
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015'],
            "sourceMaps": "both"
        }))
        .pipe(gulp.dest('dist-gulp'));
});


// task handle exception
gulp.task('gulp-babel-he', function(cb){
   pump([gulp.src('src/**/*.js'),
       sourcemaps.init(),
       babel({
           presets: ['es2015']
       }),
       sourcemaps.write(),
       gulp.dest('dist-gulp')
       ], cb);
});


gulp.task('watch', function(){
   gulp.watch('src/**/*.js', ['gulp-babel-he'])
});


gulp.task('default', ['watch']);

