// EmberData Store Service

// eslint-disable-next-line ember/use-ember-data-rfc-395-imports
import BaseStore from 'ember-data/store';
import { service } from '@ember/service';

export default class Store extends BaseStore {
  // Injecting the requestManager service to access the request manager
  @service requestManager;
}
