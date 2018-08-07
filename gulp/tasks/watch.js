import gulp from 'gulp';
import browserSync from 'browser-sync';
import { join } from 'path';

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
    gulp.watch('./src/pug/**/*.pug', ['pugChanged']);

    // styles
    gulp.watch('./src/sass/**/*.scss', ['cssInject']);
    // watch('./src/sass/**/*.scss', () => {
    //     gulp.start
    // })
});

gulp.task('pugChanged', ['pugRender'], () => {
    browserSync.reload();
});

gulp.task('cssInject', ['styles'], () => {
    gulp.src('./dist/styles.css')
        .pipe(browserSync.stream());
});