import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  // The @tracked decorator is used to define a property that Ember tracks for changes - state
  @tracked isLarge = false;

  // The @action decorator is used to define a method that can be called from a template. Without this decorator, the method would not be able to access the component's state.
  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
