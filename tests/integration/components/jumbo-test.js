import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals-emberjs-demo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

// Component tests are used to test the behavior of individual components in isolation.
module('Integration | Component | jumbo', function (hooks) {
  // Rendering tests are used to test the rendering of the component.
  setupRenderingTest(hooks);

  test('it renders the content inside a jumbo header with a tomster', async function (assert) {
    await render(hbs`<Jumbo>Hello World</Jumbo>`);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo').hasText('Hello World');
    assert.dom('.jumbo .tomster').exists();
  });
});
