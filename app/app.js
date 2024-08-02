import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'super-rentals-emberjs-demo/config/environment';
import { setBuildURLConfig } from '@ember-data/request-utils';

// We want our builder to respect a configurable default host and/or namespace. Adding a namespace prefix happens to be pretty common across Ember apps, so EmberData provides a global config mechanism for host and namespace. Typically you will want to do this either in your store file or app file.

// This is how you can set the default host and namespace for all requests in your app:
setBuildURLConfig({
  namespace: 'api',
});

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
