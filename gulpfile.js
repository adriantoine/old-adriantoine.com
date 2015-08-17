
var gulp = require('gulp'),
    gutil = require('gulp-util'),

    yaml = require('js-yaml'),
    fs = require('fs'),

    handlebars = require('gulp-compile-handlebars'),
    layouts = require('handlebars-layouts'),
    ext = require('gulp-ext-replace'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),

    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),

    webpack = require('webpack'),
    connect = require('gulp-connect'),

    siteConfig = yaml.safeLoad(fs.readFileSync('site.yml', 'utf8'));

// Handlebars task
gulp.task('hbs', function() {

  var helpers = layouts(handlebars.Handlebars);
  helpers.md = require('./src/hbs-helpers/md');

  var options = {
    batch: ['./src/tmpl/partials', './src/tmpl/layouts'],
    helpers: helpers
  };

  return gulp.src('src/tmpl/pages/**/*.hbs')
    .pipe(handlebars(siteConfig, options))
    .pipe(ext('.html'))
    .pipe(gulp.dest('dist'));

});

// CSS task
gulp.task('css', function() {

  gulp.src('src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
        cssnano()
      ]))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

// Webpack task
gulp.task('webpack', function(callback) {
  webpack({
    entry: './src/js/main.js',
    output: {
      path: './dist/js/',
      filename: 'main.js'
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })]
  }, function(err, stats){
    if(err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

// Fonts
gulp.task('fonts', function() {
  gulp.src('./src/fonts/**/*', {base: './src/fonts'})
    .pipe(gulp.dest('./dist/css/fonts/'));
});

// Static
gulp.task('static', function() {
  gulp.src('./src/static/**/*', {base: './src/static'})
    .pipe(gulp.dest('./dist/'));
});

// Fonts
gulp.task('img', function() {
  gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

// Server task
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

// Watch tasks
gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', ['css']);
  gulp.watch('src/tmpl/**/*.hbs', ['hbs']);
  gulp.watch('src/js/**/*.js', ['webpack']);
});

gulp.task('default', ['hbs', 'css', 'fonts', 'static', 'img', 'webpack']);
gulp.task('server', ['connect', 'watch']);
