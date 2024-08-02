import BaseRequestManager from '@ember-data/request';
import Fetch from '@ember-data/request/fetch';
import { JsonSuffixHandler } from 'super-rentals-emberjs-demo/utils/handlers';

export default class RequestManager extends BaseRequestManager {
  constructor(args) {
    super(args);

    // The use method is used to add handlers to the request manager.
    // We use the Fetch handler, which is a built-in handler that makes the actual fetch request.
    this.use([JsonSuffixHandler, Fetch]);
  }
}
