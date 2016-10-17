import Ember from 'ember';
const Config = require('electron-config');
const config = new Config();

export default Ember.Route.extend({
  model() {
    var token = config.get('token');
    return new Promise(function(resolve, reject){
      Ember.$.getJSON(`https://api.github.com/issues?access_token=${token}&filter=mentioned&sort=updated`, function(data) {
        resolve({mentions: data});
      }).fail(function(jqxhr,textStatus,error){
        if (error === 'Unauthorized') {
          this.transitionTo('login');
          console.log(error);
        }
      }.bind(this));
    }.bind(this));
  }
});
