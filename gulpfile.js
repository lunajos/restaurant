'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

let scripts, html;

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

// Copy all html files
function Html(done){
	gulp.task('html', function() {
		gulp.src(path.html.src)
		.pipe(gulp.dest(path.html.dest));
	});
	done();
}

// Copy all Javascript Files
function Scripts(done) {
	gulp.task('scripts', function() {
		gulp.src(path.scripts.src)
		.pipe(gulp.dest(path.scripts.dest));
	});
	done();
}

// Transpile sass to CSS
function Sass(done) {
	gulp.task('sass', function() {
		return gulp.src(path.styles.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(path.styles.dest));
	});
	done();
}


// Optomize Images
function Imagemin(done) {
	gulp.task('imagemin', function() {
		gulp.src(path.images.src)
		.pipe(imagemin())
		.pipe(gulp.dest(path.images.dest));
	});
	done();
}

// watch files
gulp.task('watch', function() {
  gulp.watch(path.styles.src, gulp.parallel(Sass));
  gulp.watch(path.scripts.src, gulp.parallel(Scripts));
  gulp.watch(path.images.src, gulp.parallel(Imagemin));
  gulp.watch(path.html.src, gulp.parallel(Html));
});

// Default Task 
gulp.task('default', function(done){
	gulp.parallel(Sass, Scripts, Html, Imagemin);
	done();
});

exports.Sass = sass;
exports.Scripts = scripts;
exports.Html = html;
exports.Imagemin = imagemin;

