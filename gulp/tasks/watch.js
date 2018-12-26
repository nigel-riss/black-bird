import gulp from 'gulp';
import browserSync from 'browser-sync';

const dirs = {
    pug: './src/pug/**/*.pug',
    sass: './src/sass/**/*.scss',
    js: './src/js/**/*.js',
    dist: './dist'
}

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        // this is needed to move notify popup to bottom, cause it usually
        // overlaps page elements on its default position
        notify: {
            styles: {
                top: 'auto',
                bottom: 0
            }
        }
    });

    // pug
    gulp.watch(dirs.pug, ['pugChanged']);

    // styles
    gulp.watch(dirs.sass, ['cssInject']);

    // scripts
    gulp.watch(dirs.js, ['jsChanged']);
});

// pug
gulp.task('pugChanged', ['pugRender'], () => {
    browserSync.reload();
});

// styles
gulp.task('cssInject', ['styles'], () => {
    gulp.src('./dist/styles.css')
        .pipe(browserSync.stream());
});

// scripts
gulp.task('jsChanged', () => {
    gulp.src(dirs.js)
        .pipe(gulp.dest(dirs.dist));
    browserSync.reload();
});

