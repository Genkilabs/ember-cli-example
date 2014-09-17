import Ember from 'ember';

var Router = Ember.Router.extend({
    location: EmberCliExampleENV.locationType
});

Router.map(function() {
    this.route('application');

    this.resource('people', function() {
        this.resource('people.show', {
            path: ':id'
        }, function() {});
    });

    this.resource('qualities', function() {
        this.resource('qualities.show', {
            path: ':quality_id'
        });
    });
});

export
default Router;
