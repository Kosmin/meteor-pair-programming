

Meteor.publish('components', function () {
  return Components.find();
});