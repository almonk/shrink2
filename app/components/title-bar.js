import Ember from 'ember';

export default Ember.Component.extend({
  actions :{
    goToMentioned: function() {
      this.get('router').transitionTo('mentions');
      console.log('GO');
    },
    goToAssigned: function() {
      this.get('router').transitionTo('assigned');
      console.log('GO');
    },
    goToSubscribed: function() {
      this.get('router').transitionTo('subscribed');
      console.log('GO');
    }
  }
});
