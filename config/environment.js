/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-js-getting-started',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    faye: {
      URL: 'http://127.0.0.1:3000/faye',
      options: {
        timeout: 5
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      host: 'http://localhost:3000'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.host = 'https://stormy-gorge-81007.herokuapp.com'
    ENV.faye.URL = 'https://stormy-gorge-81007.herokuapp.com/faye'
  }

  return ENV;
};
