var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    watch = require('gulp-watch'),
    cssmin = require('gulp-cssmin'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    pug = require('gulp-pug'),
    babel = require('gulp-babel');

gulp.task('watch', function () {
    watch('dev/sass/*.sass', function () {
        sass('dev/sass/style.sass')
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(cssmin())
            .pipe(gulp.dest('./'))
    });
    watch('dev/js/*.js', function () {
        gulp.src('dev/js/*.js')
            .pipe(concat('script.js'))
            .pipe(babel({
                presets: ['env']
            }))
            .pipe(uglify())
            .pipe(gulp.dest('./'));
    })
    watch('dev/pug/index.pug', function () {
        gulp.src('dev/pug/index.pug')
            .pipe(pug())
            .pipe(gulp.dest('./'))
    })
});
