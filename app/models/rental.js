// Rental model, detailed in app/models/rental.js
// Created a RentalModel class that extends EmberData's Model superclass. When fetching the listing data from the server, each individual rental property will be represented by an instance (also known as a record) of our RentalModel class.
import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

// Defining the Rental model, which extends the Model class from EmberData

// Attributes declared with the @attr decorator work with the auto-track feature. Therefore, we are free to reference any model attributes in our getter (this.category), and Ember will know when to invalidate its result.
export default class RentalModel extends Model {
  // We can access these attributes for an instance of RentalModel using standard dot notation, such as model.title or model.location.lat. In addition to the attributes we declared here, there will always be an implicit id attribute as well, which is used to uniquely identify the model object and can be accessed using model.id.
  @attr title;
  @attr owner;
  @attr city;
  @attr location;
  @attr category;
  @attr image;
  @attr bedrooms;
  @attr description;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
