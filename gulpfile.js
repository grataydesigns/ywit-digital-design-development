const { src, dest, series } = require('gulp');
const del = require('del');

function clean() {
  return del('_dist');
}

function htmlCssFiles() {
  return src(['*.css', 'script.js', '*.html'])
    .pipe(dest('_dist'));
}

function imageAssets() {
  return src('images/**/*')
    .pipe(dest('_dist/images'));
}

exports.default = series(clean, htmlCssFiles, imageAssets);
