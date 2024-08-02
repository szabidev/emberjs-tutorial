// Rental route
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { findRecord } from '@ember-data/json-api/request';

export default class RentalRoute extends Route {
  // Injecting the store service to access the Ember Data store
  @service store;

  //   Fetching the data from the API and returning it to the template
  //  The model hook is used to fetch data from the API and return it to the template. In this case, the model hook fetches the rental data for a specific rental_id and returns it to the template.
  async model(params) {
    const { content } = await this.store.request(
      // findRecord is used to fetch a single record by its ID
      findRecord('rental', params.rental_id),
    );
    return content.data;
  }
}
