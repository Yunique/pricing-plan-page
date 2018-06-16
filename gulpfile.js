const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const reload      = browserSync.reload;


//Server
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "source"
        }
    });
    
    browserSync.watch('./source/**/*.*').on('change', reload);
});

//Autoprefixer
gulp.task ('prefix', function() {
    return gulp.src('source/css/main.css')
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('build/css'));
});

// Copy html
gulp.task('copy-html', function() {
    return gulp.src('./source/index.html')
    .pipe(gulp.dest('build/'));
});

// Copy images
gulp.task('copy-images', function() {
    return gulp.src('./source/img/*.*')
    .pipe(gulp.dest('build/img'));
});

// gulp.task('copy', gulp.parallel('copy-html', 'copy-images', 'prefix'));