// app/initializers/online-store.js
import DS from 'ember-data';

var CustomOnlineSerializer = DS.ActiveModelSerializer.extend();

var CustomOnlineAdapter = DS.ActiveModelAdapter.extend({
	host: EmberCliExampleENV.serverHost, //make this your backend in config/environment.js

    serializer: CustomOnlineSerializer.create(),
 	// namespace: '/api/v1' // your server namespace if you have one
    buildURL: function(record_type, suffix) {
        return this._super(record_type, suffix) + ".json";
    },
});

// var OnlineStore = Ep.Session.extend({
var OnlineStore = DS.Store.extend({
	adapterFor: function(type) {
		return this.container.lookup('adapter:_custom_store');
	},

	serializerFor: function(type) {
		return this.container.lookup('serializer:_custom_store');
	}
});

export default {
	name: "onlineStore",

	initialize: function(container, application) {
		CustomOnlineSerializer.reopen({ container: container });

		container.register('store:online', OnlineStore);
		container.register('adapter:_custom_store', CustomOnlineAdapter);
		container.register('serializer:_custom_store', CustomOnlineSerializer);

		application.inject('route',      'onlineStore', 'store:online');
		application.inject('controller', 'onlineStore', 'store:online');
	}
};