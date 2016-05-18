var gulp = require('gulp');
var sass = require('gulp-eslint');
var watch = require('gulp-watch');

gulp.task('default', ['lint', 'test'], function(){
    console.log('GULP LIVES!!!')
});

gulp.task('lint', function() {
 return gulp.src(['./greet.js', '!node_modules/gulp-eslint'])
  .pipe(eslint());
  .pipe(eslint.format());
  .pipe(eslint.failAfterError());
});

gulp.watch('./**/*.js', ['lint', 'test']);
