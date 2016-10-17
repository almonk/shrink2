import Ember from 'ember';
const {shell} = require('electron');

export default Ember.Component.extend({
  isExpanded: false,

  actions :{
    expand: function() {
      this.toggleProperty('isExpanded');
    },

    openUrl: function(url) {
      shell.openExternal(url)
    }
  }
});
