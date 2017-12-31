var gulp = require('gulp');
var stylus = require('gulp-stylus');
 
gulp.task('default', function () {
	return gulp.src('./css/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./dist/css/'));
});