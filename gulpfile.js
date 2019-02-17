'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

// Default paths to `src` and `dest`
const path = {
	styles: {
		src: 'src/styles/*.scss',
		dest: 'dist/styles'
	},
	scripts: {
		src: './src/js/*.js',
		dest: 'dist/js'
	},
	images: {
		src: 'src/assets/*.{jpg,jpeg,png}',
		dest: 'dist/assets'
	},
	html:{
		src: 'src/*.html',
		dest: 'dist/'
	}
};

// Set Default Compiler
//sass.compiler = node

// Copy all html files
gulp.task('copy-html', function(done) {
	gulp.src(path.html.src)
	.pipe(gulp.dest(path.html.dest));
	
	done();
});

// Copy all Javascript Files
gulp.task('copy-js', function(done) {
	gulp.src(path.scripts.src)
	.pipe(gulp.dest(path.scripts.dest));
	
	done();
});


// Transpile sass to CSS
gulp.task('sass', function(done) {
	gulp.src(path.styles.src)
 	.pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(path.styles.dest));

  done();
});

// Watch sass
gulp.task('sass:watch', function(done){
	gulp.watch(path.styles.src , function(){
		return ['sass'];
	});

	done();
});

// Optomize Images
gulp.task('imagemin', function(done) {
	gulp.src(path.images.src)
	.pipe(imagemin())
	.pipe(gulp.dest(path.images.dest));
	done();
});

// Default Task 
gulp.task('default', function(done){
	done();
	return ['copy-html', 'copy-js', 'sass', 'imagemin'];
});
