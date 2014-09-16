import Ember from 'ember';

var Router = Ember.Router.extend({
	location: EmberCliExampleENV.locationType
});

Router.map(function() {
	this.resource('agents', function(){
        this.resource('agents.detail', {path: ':agent_id'});
    });
	this.route('application');
});

export default Router;
