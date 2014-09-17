import DS from 'ember-data';

//uncomment to use default rest adapter
// export default DS.RESTAdapter.extend({
// 	host: EmberCliExampleENV.serverHost
// });

//uncomment to use IndexedDB
export default DS.IndexedDBAdapter.extend({
	databaseName: 'ember_cli_example_db',
	version: 2,
	migrations: function() {
		//use the default id provided by backend
		this.addModel('agent');

        this.addModel('person');
        this.addModel('quality');
		//This is required if you use IndexedDB becuase it is not auto-generated.
		this.addModel('ember-sync-queue-model', {keyPath: 'id', autoIncrement: true});
	}
});

//uncomment to use LocalStorage
// export default DS.LSAdapter.extend({
//     namespace: 'ember-example'
// });
