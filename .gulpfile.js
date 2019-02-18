'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
//const { watch } = require('gulp');
//const del = require('del');

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
function clean () {
	//return del([ 'assets' ]);
}

function html () {
	// Copy all html files
	return gulp.task('copy-html', function(done) {
		gulp.src(path.html.src)
		.pipe(gulp.dest(path.html.dest));
		
		done();
	});
}

function scripts () {
	// Copy all Javascript Files
	return gulp.task('copy-js', function(done) {
		gulp.src(path.scripts.src)
		.pipe(gulp.dest(path.scripts.dest));
		
		done();
	});
}

function styles (done) {
	// Transpile sass to CSS
	gulp.task('sass', function() {
		gulp.src(path.styles.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(path.styles.dest));

	});
	done();
}
function assets () {
	// Optomize Images
	return gulp.task('imagemin', function(done) {
		gulp.src(path.images.src)
		.pipe(imagemin())
		.pipe(gulp.dest(path.images.dest));
		done();
	});
}

// Default Task 
gulp.task('default', function(done){
	done();
	return ['copy-html', 'copy-js', 'sass', 'imagemin'];
});



function watch () {
	gulp.watch(path.styles.src, styles);
	gulp.watch(path.scripts.src, scripts);
}


exports.styles = styles;
exports.html = html;
exports.assets = assets;
exports.scripts = scripts;
exports.clean = clean;
exports.watch = watch;

var build = gulp.series(styles, scripts);

gulp.task('build', build);
