const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

exports.default = () => (
  gulp.src('./sass/*.sass')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
);