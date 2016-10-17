import Ember from 'ember';
const {shell} = require('electron');
const Config = require('electron-config');
const config = new Config();

export default Ember.Component.extend({
  actions: {
    signIn: function() {
      config.set('token', this.get('authToken'));
      this.get('router').transitionTo('mentions');
    },
    openUrl: function(url) {
      shell.openExternal(url)
    }
  }
});
