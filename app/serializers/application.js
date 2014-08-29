import DS from 'ember-data';

//uncomment thses to choose REST, IndexedDB, or LocalStorage
// export default DS.RESTSerializer.extend({});
export default DS.IndexedDBSerializer.extend({});
// export default DS.LSSerializer.extend({});
