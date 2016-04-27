var gulp = require('gulp'),
	del = require('del'),
	babel = require('gulp-babel');

var SRC_PATH = './src',
	LIB_PATH = './lib';

gulp.task('clear', function(cb) {
	del([ LIB_PATH + '/*' ], function() {
		cb();
	});
});

gulp.task('build', [ 'clear' ], function() {
	return gulp.src([ SRC_PATH + '/**/*.js' ])
				.pipe(babel({ blacklist: [ 'useStrict' ] }))
				.pipe(gulp.dest(LIB_PATH));
});

gulp.task('default', function() {
	gulp.start('build');
});
