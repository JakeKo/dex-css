var gulp = require('gulp');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
 
gulp.task('css', function () {
	return gulp.src('./css/*.styl')
		.pipe(stylus())
		.pipe(postcss([autoprefixer]))
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('minify', function() {
	return gulp.src('./css/*.styl')
		.pipe(stylus())
		.pipe(postcss([autoprefixer, cssnano]))
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', ['css']);