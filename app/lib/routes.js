Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/:token', {
  name: 'home',
  controller: 'HomeController',
  where: 'client',
  data: function() {
    CodeSnippets.findOne({token: this.params.token});
  }
});
