// The main goal here is to test the key functionalities of the component individually. That way, if any of these features regresses in the future, these tests can help pinpoint the source of the problem for us. Because a lot of these tests require parsing the URL and accessing its query params, we setup our own this.tweetParam test helper function in the beforeEach hook. This pattern allows us to easily share functionality between tests. We were even able to refactor the previous test using this new helper!

import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals-emberjs-demo/tests/helpers';
// import Service for mocking the service
import Service from '@ember/service';
import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

// Mock the URL
const MOCK_URL = new URL(
  '/foo/bar?baz=true#some-section',
  window.location.origin,
);

// Mock the router service
class MockRouterService extends Service {
  get currentURL() {
    return '/foo/bar?baz=true#some-section';
  }
}

module('Integration | Component | share-button', function (hooks) {
  setupRenderingTest(hooks);

  // beforeEach is a hook that runs before each test
  hooks.beforeEach(function () {
    // Register the service
    this.owner.register('service:router', MockRouterService);

    // Inject the service
    this.tweetParam = (param) => {
      let link = find('a');
      let url = new URL(link.href);
      return url.searchParams.get(param);
    };
  });

  // test is a QUnit test that defines a new test case
  test('basic usage', async function (assert) {
    // Render the component
    await render(hbs`<ShareButton>Tweet this!</ShareButton>`);

    // Check if the rendered component has the expected attributes
    assert
      .dom('a')
      .hasAttribute('target', '_blank')
      .hasAttribute('rel', 'external nofollow noopener noreferrer')
      .hasAttribute('href', /^https:\/\/twitter\.com\/intent\/tweet/)
      .hasClass('share')
      .hasClass('button')
      .containsText('Tweet this!');

    // Check if the URL is correct
    assert.strictEqual(this.tweetParam('url'), MOCK_URL.href);
  });

  test('it supports passing @text', async function (assert) {
    // Render the component with the text attribute
    await render(
      hbs`<ShareButton @text="Hello Twitter!">Tweet this!</ShareButton>`,
    );
    // Check if the text is correct
    assert.strictEqual(this.tweetParam('text'), 'Hello Twitter!');
  });

  test('it supports passing @hashtags', async function (assert) {
    await render(
      hbs`<ShareButton @hashtags="foo,bar,baz">Tweet this!</ShareButton>`,
    );

    assert.strictEqual(this.tweetParam('hashtags'), 'foo,bar,baz');
  });

  test('it supports passing @via', async function (assert) {
    await render(hbs`<ShareButton @via="emberjs">Tweet this!</ShareButton>`);
    assert.strictEqual(this.tweetParam('via'), 'emberjs');
  });

  test('it supports adding extra classes', async function (assert) {
    await render(
      hbs`<ShareButton class="extra things">Tweet this!</ShareButton>`,
    );

    assert
      .dom('a')
      .hasClass('share')
      .hasClass('button')
      .hasClass('extra')
      .hasClass('things');
  });

  test('the target, rel and href attributes cannot be overridden', async function (assert) {
    await render(
      hbs`<ShareButton target="_self" rel="" href="/">Not a Tweet!</ShareButton>`,
    );

    assert
      .dom('a')
      .hasAttribute('target', '_blank')
      .hasAttribute('rel', 'external nofollow noopener noreferrer')
      .hasAttribute('href', /^https:\/\/twitter\.com\/intent\/tweet/);
  });
});
