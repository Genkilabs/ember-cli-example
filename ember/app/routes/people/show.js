import Ember from 'ember';

export
default Ember.Route.extend({
    model: function(params) {
        return this.emberSync.find('person', params['id']);
    },
    actions: {
        save: function(person) {
            person.save();
        }
    },
});
