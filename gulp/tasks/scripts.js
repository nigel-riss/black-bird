import gulp from 'gulp';
import { onError } from 'gulp-notify';
import webpack from 'webpack-stream';

const config = {
    entry: {
        main: './src/js/main.js'
    },
    output: {
        filename: '[name].js'
    },
    mode: 'production'
};

const dirs = {
    js: './src/js/**/*.js',
    dest: './dist'
};

gulp.task('scripts', function() {
    return gulp.src(dirs.js)
        .pipe(webpack(config))
        .on('error', onError((error) => {
            return {
                title: 'Scripts',
                message: error.message
            };
        }))
        .on('error', (error) => {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(gulp.dest(dirs.dest));
});