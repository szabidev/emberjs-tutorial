// In Ember, services serve a similar role to global variables, in that they can be easily accessed by any part of your app. For example, we can inject any available service into components, as opposed to having them passed in as an argument. This allows deeply nested components to "skip through" the layers and access things that are logically global to the entire app, such as routing, authentication, user sessions, user preferences, etc. Without services, every component would have to pass through a lot of the same arguments into every component it invokes.

// share-button.js file is a Glimmer component that adds functionality to the ShareButtonComponent component to generate a share URL for Twitter using the Twitter Web Intent API.
import Component from '@glimmer/component';
import { service } from '@ember/service';
const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {
  // The @service decorator is used to access the router service, which provides information about the current URL.
  // This injects the router service into the component, making it available to us as this.router.
  @service router;

  get currentURL() {
    // return the current URL
    return new URL(this.router.currentURL, window.location.origin);
  }

  get shareURL() {
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL);

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      url.searchParams.set('hashtags', this.args.hashtags);
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via);
    }

    return url;
  }
}
