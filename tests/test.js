import Enum from './enum';

describe('Google demo test for Mocha', function() {
  describe('with Nightwatch', function() {
    it('uses BDD to run the Google simple test', function(browser) {
      browser
        .url('https://google.com')
        .expect.element('body')
        .to.be.present.before(1000);

      browser
        .setValue('input[type=text]', ['nightwatch.js', browser.Keys.ENTER])
        .pause(1000)
        .assert.containsText('h3', 'Nightwatch.js | Node.js powered End-to-End testing framework');
    });
  });
});
