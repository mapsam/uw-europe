var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    concat = require('gulp-concat'),
    bsync  = require('browser-sync'),
    reload = bsync.reload,
    watch  = require('gulp-watch');


/*
**
** CONFIG
**
*/
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
    src: src + '/js/**/*.js',
    dest: dest + '/js',
    options: {}
  },
  vendor: {
    src: ['./node_modules/d3/d3.js', './node_modules/topojson/topojson.js', './node_modules/queue-async/queue.js'],
    dest: dest + '/js'
  }
};


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
** JS
**
*/
gulp.task('js', ['lint', 'uglify']);

// lint
gulp.task('lint', function() {
  return gulp.src(config.js.src)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// uglify
gulp.task('uglify', function () {
  gulp.src(config.js.src)
    .pipe(uglify())
    .pipe(concat('europe.js'))
    .pipe(gulp.dest(config.js.dest))
});

// vendor
gulp.task('vendor', function() {
  return gulp.src(config.vendor.src)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.vendor.dest));
});

/*
**
** DEFAULT
**
*/
gulp.task('default', ['vendor', 'css', 'js'], function(){
  gulp.watch(config.css.src, ['css']);
  gulp.watch(config.js.src, ['js']);
});