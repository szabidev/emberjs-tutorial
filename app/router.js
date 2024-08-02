// Router class is defined in the EmberRouter class, is used to define the routes for the application
import EmberRouter from '@ember/routing/router';
import config from 'super-rentals-emberjs-demo/config/environment';

// Defining the Router class
export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}
// Defining the routes
Router.map(function () {
  this.route('about');
  // Explicitly defining the path for the contact route
  this.route('contact', { path: '/getting-in-touch' });
  // Defining the nested route for the rentals, :rental_id is a dynamic segment
  this.route('rental', { path: '/rentals/:rental_id' });
});
