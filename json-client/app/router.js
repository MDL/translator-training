import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('services', function() {
    this.route('show', { path: ':service_id' });
  });
});

export default Router;
