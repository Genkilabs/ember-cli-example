import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h2>Welcome</h2>\n\n<p>Try loading the Persons data from your backend at http://localhost:3000 and verifying it is in the IndexedDB</p>\n\n<p>If that works, reload the app at the root, turn off the back end, and navigate to Agents. The data should be pulled from the browsers IndexedDB</p>\n\n<p>Lastly, build for Cordova and test on your favoriate mobile device</p>\n");
  
});
