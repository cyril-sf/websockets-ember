import Ember from 'ember';

export default Ember.Controller.extend({
  faye: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.setup();
  },

  setup() {
    let faye = this.get('faye');
    let subscription = faye.subscribe('/some/channel', this.get('onMessage'), this);

    let client = faye.get('client');
    client.on('transport:up', () => {
      console.log('You are connected to the server');
    });
    client.on('transport:down', () => {
      console.log('You lost the connection to the server');
    });

    return subscription;
  },

  onMessage(data, channel) {
    console.debug(`Received message on channel "${channel}":`, data);
  }
});
