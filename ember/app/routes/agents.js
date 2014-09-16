import Ember from 'ember';

export default Ember.Route.extend({
	title: "Agents",
	model: function(){
		// Several request types provided for reference
		console.log('Loading Agents');

		//ember SYNC
		// NOTE: findQuery returns array Ember.A()
		//		 find returns a promise
		// return this.emberSync.findQuery('agent', {page:1, limit:20});
		return this.emberSync.find('agent');

		//EPF
		// return this.session.query('agent');

		//ember data
		// return this.store.findQuery('agent');

		//inline fixture
		// return [{'first_name':'john', 'last_name':'smith'}];
	},
});
