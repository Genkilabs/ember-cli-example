import DS from 'ember-data';

export default DS.IndexedDBAdapter.extend({
	databaseName: 'example_db',
	version: 1,
	migrations: function() {
		//use the default id provided by backend
		this.addModel('agent');
		//This is required if you use IndexedDB becuase it is not auto-generated.
		this.addModel('ember-sync-queue-model', {keyPath: 'id', autoIncrement: true});
	}
});
