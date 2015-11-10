var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = rquire('gulp-concat');

var jsSources = [
     'components/js/script.js',
     'components/js/script.js',
     'components/js/script.js'
];

gulp.task('log', function (){
    gutil.log('gulp is amazing');

});

gulp.task('js', function(){

    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(gulp.dest('build/development/js'))
});