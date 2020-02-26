'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    autoprefixer = require('gulp-autoprefixer'),
    bs = require('browser-sync').create();

sass.compiler = require('node-sass');

// Scss to css
gulp.task('sass', function () {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('assets/css'))
        .pipe(bs.reload({stream: true}));
});

// pug to html
gulp.task('pug', function () {
    return gulp.src('assets/pug/pages/**/*.pug')
        .pipe(pug({ pretty: true }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('pages/'))
        .pipe(bs.reload({stream: true}));
});

gulp.task('watch', function () {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    gulp.watch('assets/pug/pages/**/*.pug', ['pug']);
    gulp.watch("*.html").on('change', bs.reload);
});

gulp.task('browser-sync',['watch'], function() {
    bs.init({
        proxy: "localhost/all_live_thems/Themeforest/chatloop/html/v2/upload/html"
    });
});

gulp.task('default', [ 'sass', 'pug', 'watch', 'browser-sync' ]);