import Ember from 'ember';

export
default Ember.Route.extend({
    title: "Person",
    // model: function(params) {
    //     console.log("running people.show.model()");
    //     return this.emberSync.find('person', params['id']);
    // },
    // afterModel: function(person, transition) {
    //     console.log("person = ", person);
    // },
    actions: {
        save: function(person) {
            person.save();
        }
    },
});
