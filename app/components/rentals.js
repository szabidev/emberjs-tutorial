import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

// Component class, with a tracked query state property
export default class RentalsComponent extends Component {
  @tracked query = '';
}
