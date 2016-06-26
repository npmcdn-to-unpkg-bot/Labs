var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    clean = require('gulp-clean'),
    sftp = require('gulp-sftp'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');
 
//connect
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});


//reload 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
 

//autoprefixer
gulp.task('autoprefixer', function () {
	return gulp.src('app/css/src/main.css')
		.pipe(autoprefixer({
			browsers: ['last 15 versions','> 1%', 'IE 7'],
			cascade: false
		}))
		.pipe(gulp.dest('app/css'));
});

//SASS
gulp.task('sass', function () {
  return gulp.src('app/css/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css/src'));
});
 
//imagemin
gulp.task('imagemin', function () {
	return gulp.src('app/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
});

//sftp
gulp.task('sftp', function () {
	return gulp.src('dist/**/*')
		.pipe(sftp({
			host: 'den-final-exam.ucoz.net',
			user: 'eden-final-exam',
			pass: '230685'
		}));
});
 
//clean 
gulp.task('clean', function () {
	return gulp.src('dist', {read: false})
		.pipe(clean());
});

//bower
gulp.task('bower', function () {
    gulp.src('./app/index.html')
    .pipe(wiredep({
        directory: "app/bower_components"
    }))
    .pipe(gulp.dest('./app'));
});

//Build
gulp.task('build',['clean', 'sass', 'autoprefixer', 'bower' ,'imagemin'] , function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});

//watcher
gulp.task('watch', function () {
    gulp.watch('bower.json',['bower']);
    gulp.watch('app/css/sass/**/*.scss', ['sass']);
    gulp.watch('app/css/src/main.css',['autoprefixer', 'html']);
    gulp.watch(['./app/*.html', 'app/js/**/*.js'], ['html']);

});

//default 
gulp.task('default', ['connect', 'watch']);