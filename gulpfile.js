var gulp            = require('gulp'),
    uglify          = require('gulp-uglify'),
    jshint          = require('gulp-jshint'),
    sass            = require('gulp-sass'),
    concat          = require('gulp-concat'),
    mainBowerFiles  = require('main-bower-files'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    bower           = require('gulp-bower'),
    watch           = require('gulp-watch');


var src = './src';
var dest = './public';
var config = {
  css: {
    src: src + '/sass/**/*.{sass,scss}',
    dest: dest + '/css',
    options: {
      outputStyle: 'compressed',
      errLogToConsole: true
    }
  },
  js: {
    src: src + '/js/*.js',
    dest: dest + '/js',
    options: {}
  },
  vendor: {
    src: ['./node_modules/d3/d3.js', './node_modules/topojson/topojson.js'],
    dest: dest + '/js'
  },
  bsync: {
    server: dest,
    watch: dest + '/**/**.*'
  }
};



/*
**
** DEFAULT
**
*/
gulp.task('default', ['vendor', 'css', 'js'], function(){
  gulp.watch(config.css.src, ['css']);
  gulp.watch(config.js.src, ['js']);
});


/*
**
** VENODR
**
*/
gulp.task('vendor', function() {
  return gulp.src(config.vendor.src)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.vendor.dest));
});


/*
**
** SASS / CSS
**
*/
gulp.task('css', function () {
    return gulp.src('./src/scss/*.scss')
      .pipe(sass(config.css.options))
      .pipe(gulp.dest('./public/css'))
      .pipe(reload({stream:true}));
});


/*
**
** UGLIFY
**
*/
gulp.task('uglify', function () {
  gulp.src(config.js.src)
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dest))
});


/*
**
** LINT
**
*/
gulp.task('lint', function() {
  return gulp.src(config.js.src)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


/*
**
** JS
**
*/
gulp.task('js', ['lint', 'uglify']);