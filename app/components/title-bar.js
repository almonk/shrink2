import Ember from 'ember';
const Mousetrap = require('mousetrap');

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.errors = [];
    Mousetrap.bind('meta+1', function() {
      this.send('goToMentioned');
    }.bind(this));

    Mousetrap.bind('meta+2', function() {
      this.send('goToAssigned');
    }.bind(this));

    Mousetrap.bind('meta+3', function() {
      this.send('goToSubscribed');
    }.bind(this));
  },

  actions :{
    goToMentioned: function() {
      this.get('router').transitionTo('mentions');
    },
    goToAssigned: function() {
      this.get('router').transitionTo('assigned');
    },
    goToSubscribed: function() {
      this.get('router').transitionTo('subscribed');
    }
  }
});
