import { home as homeUrl } from './enums/urls';

describe('Google demo test for Mocha', function() {
  describe('with Nightwatch', function() {
    it('uses BDD to run the Google simple test', function(browser) {
      browser
        .url(homeUrl)
        .expect.element('body')
        .to.be.present.before(1000);

      browser
        .setValue('input[type=text]', ['nightwatch.js', browser.Keys.ENTER])
        .pause(1000)
        .assert.containsText('h3', 'Nightwatch.js | Node.js powered End-to-End testing framework');
    });
  });
});
