var gulp = require('gulp');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var mqpacker = require('css-mqpacker');
var rename = require('gulp-rename');
 
gulp.task('stylus', function () {
	var processors = [
		mqpacker,
		autoprefixer,
		cssnano,
	];

	return gulp.src('./src/styl/*.styl')
		.pipe(stylus())
		.pipe(postcss(processors))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', ['stylus']);