
const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')


function runSass() {
    return src(['app/scss/**/*.scss', '!app/scss/modules/**'])
        .pipe( sass({ outputStyle: 'compressed' }).on('error', console.log ) )
        .pipe( dest('app/css/') )
}


exports.default = function() {
    watch('app/scss/**/*.scss', runSass)
}
