import Ember from 'ember';

export default Ember.Route.extend({
	title: "Agents",

	model: function(){
		// Several request types provided for reference

		//ember SYNC
		return this.emberSync.findQuery('agent');

		//EPF
		// return this.session.query('agent');

		//ember data
		// return this.store.findQuery('agent');

		//inline fixture
		// return [{'first_name':'john', 'last_name':'smith'}];
	}
});
