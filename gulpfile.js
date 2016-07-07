var gulp = require('gulp');
var usemin = require('gulp-jade-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
// var rev = require('gulp-rev');
var rename = require('gulp-rename');

gulp.task('usemin', function() {
  gulp.src('./client/jade/_layout_working.jade')
    .pipe(usemin({
      css: ['concat'],
      html: [minifyHtml({empty: true})],
      js: [uglify()]
    }))
    .pipe(gulp.dest('./client/preview'));
});

gulp.task('usemin-mv', function() {
  gulp.src('./client/preview/_layout_working.jade')
  .pipe(rename('_layout.jade'))
  .pipe(gulp.dest('./client/jade/'));
});

// js: [uglify(), rev()]
