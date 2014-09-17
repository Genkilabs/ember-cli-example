import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  zipCode: DS.attr('string'),
  dateOfBirth: DS.attr('date'),
});
