const gulp = require('gulp');
const gulpif = require('gulp-if');
// const del = require('del');
const minifyHTML = require('gulp-minify-html');
const minifyCSS = require('gulp-csso');
const gulpuglify = require('gulp-uglify');
const gulpjsonminify = require('gulp-jsonminify');
const gulpwebserver = require('gulp-webserver');

var env;
var outputDir = 'builds/dev/';
env = process.env.NODE_ENV || "dev";

gulp.task('set-env-dist', function() {
    env = 'dist';
    outputDir = 'builds/dist/';
});
//html
gulp.task('html', function() {
    gulp.src('src/*.html')
        .pipe(gulpif(env === 'dist', minifyHTML()))
        .pipe(gulp.dest(outputDir))
});
//css
gulp.task('css', function() {
    gulp.src('src/css/**/*.css')
        .pipe(gulpif(env === 'dist', minifyCSS()))
        .pipe(gulp.dest(outputDir + "/css"))
});
//js
gulp.task('js', function() {
    gulp.src("src/js/**/*.js")
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
    gulp.src('src/')
        .pipe(gulpwebserver({
            livereload: true,
            open: true
        }));
});
//watch and reload
gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/css/**/*.css', ['css']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/js/**/*.json', ['json']);
});

gulp.task('default', []);
gulp.task('build',['html','css','js','json']);
gulp.task('dev',['build','webserver','watch'])
gulp.task('dist', ['set-env-dist','build']);