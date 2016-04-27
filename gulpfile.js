var gulp = require('gulp');
var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');


gulp.task('es6', function() {
	browserify({ debug: true })
		.transform(babelify)
		.require("./lib/index.js", { entry: true })
		.bundle()
		.on('error',gutil.log)
		.pipe(source('./dist/bundle.js'))
    	.pipe(gulp.dest('./'));
});

gulp.task('watch',function() {
	gulp.watch(['./**/*.js'],['es6'])
});

gulp.task('default', ['es6','watch']);
