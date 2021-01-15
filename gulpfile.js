const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

exports.default = async () => {
	await gulp.src('assets/**/*')
				.pipe(imagemin())
				.pipe(gulp.dest('build/img/'))
}