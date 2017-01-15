import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    image: DS.attr('string'),
    description: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});
