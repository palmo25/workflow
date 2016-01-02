var gulp = require('gulp'),
	gulputil = require('gulp-util'),
	concat = require('gulp-concat');


var jsSources = [
	'build/development/index.js',
	'build/development/file2.js',
	'build/development/file3.js',
	'build/development/file4.js'
];

gulp.task('js',function (){
	gulp.src(jsSources)
	.pipe(concat('app.js'))
	.pipe(gulp.dest('build/development'))
});