var gulp = require('gulp');
var sass = require('gulp-eslint');
var watch = require('gulp-watch');

gulp.task('link', function() {
 return gulp.src(['./greet.js', '!node_modules/gulp-eslint'])
  .pipe(eslint());
  .pipe(eslint.format());
  .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint'], function(){
  //???
});
