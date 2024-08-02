// This model test is also known as a unit test. This test doesn't actually render anything. It just instantiates the rental model object and tests the model object directly, manipulating its attributes and asserting their value.

import { setupTest } from 'super-rentals-emberjs-demo/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | rental', function (hooks) {
  setupTest(hooks);

  test('it has the right type', function (assert) {
    // store is a service that provides access to the EmberData store
    const store = this.owner.lookup('service:store');

    // createRecord is a method that creates a new record in the store for the given model type: 'rental'
    let rental = store.createRecord('rental', {
      id: 'grand-old-mansion',
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
      category: 'Estate',
      bedrooms: 15,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description:
        'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
    });

    assert.strictEqual(rental.type, 'Standalone');

    rental.category = 'Condo';
    assert.strictEqual(rental.type, 'Community');

    rental.category = 'Townhouse';
    assert.strictEqual(rental.type, 'Community');

    rental.category = 'Apartment';
    assert.strictEqual(rental.type, 'Community');

    rental.category = 'Estate';
    assert.strictEqual(rental.type, 'Standalone');
  });
});
