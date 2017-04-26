import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  project: attr(),
  version: attr()
});
