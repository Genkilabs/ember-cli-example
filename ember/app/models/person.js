import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  zipCode: DS.attr('string'),
  dateOfBirth: DS.attr('string'),
  qualities: DS.hasMany('quality', {async: true}),
  quality_count: function(){
    return this.get('qualities.length');
  }.property('qualities', 'qualities.length','isLoaded')
});
