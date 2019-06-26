require('@babel/register')({
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs'],
});

module.exports = (function(settings) {
  const customSettings = {
    ...settings,
    test_workers: false,
  };

  return customSettings;
})(require('./nightwatch.json'));
