var gulp = require('gulp');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
 
gulp.task('css', function () {
	return gulp.src('./css/*.styl')
		.pipe(stylus())
		.pipe(postcss([autoprefixer]))
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', ['css']);