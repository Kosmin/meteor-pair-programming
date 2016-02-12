Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});


Router.route('/:token', {
  name: 'code_snippet',
  template: 'Home',
  controller: 'HomeController',
  where: 'client',
  data: function() {
    return {
      currentSnippet: CodeSnippets.findOne({token: this.params.token})
    }
  }
});


Router.route('components', {
  name: 'components',
  controller: 'ComponentsController',
  where: 'client'
});
