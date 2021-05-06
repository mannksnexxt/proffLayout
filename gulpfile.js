const { watch } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')


function runSass(cb) {
    gulp.src('scss/**/*.scss')
        .pipe( sass().on('error', console.log ) )
        .pipe( gulp.dest('css/') )
    cb()
}


exports.default = function() {
    watch('scss/**/*.scss', runSass)
}
