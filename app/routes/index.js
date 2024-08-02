// Index route to fetch data from the API and return it to the template
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { query } from '@ember-data/json-api/request';

export default class IndexRoute extends Route {
  // Injecting the store service to access the Ember Data store
  @service store;

  // Fetching the data from the API and returning it to the template
  async model() {
    const { content } = await this.store.request(query('rental'));
    return content.data;
  }
}
