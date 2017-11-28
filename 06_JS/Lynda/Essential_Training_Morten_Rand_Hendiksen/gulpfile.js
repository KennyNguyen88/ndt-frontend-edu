const gulp = require('gulp');
const gulpif = require('gulp-if');
const del = require('del');
const pug = require('gulp-pug');
const gulpcompass = require("gulp-compass");
const minifyCSS = require('gulp-csso');
const gulpbabel = require("gulp-babel");
const gulpuglify = require('gulp-uglify');
const gulpjsonminify = require('gulp-jsonminify');
const gulpwebserver = require('gulp-webserver');

var env;
var outputDir = 'builds/dev/';
env = process.env.NODE_ENV || "dev";


gulp.task('clean', function() {
    return del(['builds']);
});
gulp.task('set-env-dist',['clean'], function() {
    env = 'dist';
    outputDir = 'builds/dist/';
});
//html
gulp.task('html', function() {
    gulp.src('src/pug/*.pug')
        .pipe(pug()) //return minified html
        .pipe(gulp.dest(outputDir))
});
//css
gulp.task('css', function() {
    gulp.src('src/css/*.scss')
        .pipe(gulpcompass({
            sass: 'src/css',
            css: 'src/css',
            font: 'src/fonts',
            image: outputDir + 'images'
        }))
        .pipe(gulpif(env === 'dist', minifyCSS()))
        .pipe(gulp.dest(outputDir + '/css'))
});
//js
gulp.task('js', function() {
    gulp.src("src/js/**/*.js")
        .pipe(gulpbabel())
        .pipe(gulpif(env === 'dist', gulpuglify()))
        .pipe(gulp.dest(outputDir + '/js'))
});
//json
gulp.task('json', function() {
    gulp.src('src/js/**/*.json')
        .pipe(gulpif(env === 'dist', gulpjsonminify()))
        .pipe(gulp.dest(outputDir + '/js'))
});
//webserver for instant reload changes
gulp.task('webserver', function() {
    gulp.src('builds/dev/')
        .pipe(gulpwebserver({
            livereload: true,
            open: true
        }));
});
//watch and reload
gulp.task('watch', function() {
    gulp.watch('src/pug/**/*.pug', ['html']);
    gulp.watch('src/css/**/*.scss', ['css']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/js/**/*.json', ['json']);
});

gulp.task('default', []);
gulp.task('build',['html','css','js','json']);
gulp.task('dev',['build','webserver','watch']);
gulp.task('dist', ['set-env-dist','build']);