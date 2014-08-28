import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberCliExampleENV.locationType
});

Router.map(function() {
  this.route('agents');
  this.route('application');
});

export default Router;
