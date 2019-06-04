require('@babel/register')({
  // eslint-disable-line
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs'],
});

module.exports = (function(settings) {
  settings.test_workers = false;
  return settings;
})(require('./nightwatch.json'));
