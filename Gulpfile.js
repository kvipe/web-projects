const gulp = require('gulp');
const babel = require('gulp-babel');
const preproc = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const mustache = require("gulp-mustache");

let paths = {
	'input': {
		'css': './src/css/',
		'js': './src/js/',
		'mustache' : './src/layout/',
		'data' : './src/data/'
	},
	'output':'./dist/'
};


function css(){
	return gulp.src(paths.input.css + 'style.less')
            .pipe(preproc())
            .pipe(gcmq())
            .pipe(autoprefixer())
            .pipe(cleanCSS({compatibility: 'ie9'}))
            .pipe(gulp.dest(paths.output))
}

function js(){
	return gulp.src([paths.input.js + 'jquery321.min.js', paths.input.js + 'smoothscroll.min.js', paths.input.js + 'script.js'])
            .pipe(concat('main.js'))
            .pipe(babel({
            		presets: ['@babel/preset-env']
            	}))
            .pipe(uglify())
            .pipe(gulp.dest(paths.output));
}

function htmltemplate(){
	return gulp.src(paths.input.mustache + 'index.mustache')
	.pipe(mustache(paths.input.data + 'projects.json', {extension: '.html'}))
	.pipe(gulp.dest("./"));
}

gulp.task('css', css);
gulp.task('js', js);
gulp.task('htmltemplate', htmltemplate);

gulp.task('default', gulp.parallel('css', 'js', 'htmltemplate'));