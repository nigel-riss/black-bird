import gulp from 'gulp';
import sass from 'gulp-sass';
import wait from 'gulp-wait';
import { onError } from 'gulp-notify';
import sassImporter from 'sass-module-importer';
import autoprefixer from 'gulp-autoprefixer';

const dirs = {
    src: './src/sass/styles.scss',
    dest: './dist'
};

gulp.task('styles', function() {
    return gulp.src(dirs.src)
        .pipe(wait(100))
        .pipe(sass({ importer: sassImporter() }))
        .on('error', onError((error) => {
            return {
                title: 'Styles',
                message: error.message
            };
        }))
        .on('error', (error) => {
            console.log(error.toString());
            this.emit('end');
        })
        // .pipe(autoprefixer({
        //     browsers: ['last 2 versions'],
        //     cascade: false
        // }))
        .pipe(gulp.dest(dirs.dest));
});