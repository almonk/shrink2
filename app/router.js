// cc28e926a87447789186942afa09a0405ae76191

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('mentions', {path: '/'});
  this.route('assigned', {path: '/assigned'});
  this.route('subscribed');
  this.route('login');
});

export default Router;
