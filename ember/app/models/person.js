import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  zipCode: DS.attr('string'),
  dateOfBirth: DS.attr('date'),
  qualities: DS.hasMany('quality'),
  quality_count: function(){
    return this.get('qualities.length');
  }.property('qualities', 'qualities.length')
});
