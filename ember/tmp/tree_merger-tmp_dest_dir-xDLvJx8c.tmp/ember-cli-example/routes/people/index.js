import Ember from 'ember';

export default Ember.Route.extend({
    title: "People",
    model: function() {
        console.log("running people.index.model()");
        // Several request types provided for reference

        //ember SYNC
        // NOTE: findQuery returns array Ember.A()
        //       find returns a promise
        // return this.emberSync.findQuery('agent', {page:1, limit:20});
        return this.emberSync.find('person');

        //EPF
        // return this.session.query('agent');

        //ember data
        // return this.store.findQuery('agent');

        //inline fixture
        // return [{'first_name':'john', 'last_name':'smith'}];
    },
    actions: {
        loadPerson: function(person) {
            this.controller.transitionToRoute('people.show', person);
        }
    },
});
