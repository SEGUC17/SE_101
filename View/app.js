var fitnessApp = angular.module('fitnessApp', ['ui.router']);
//Each state url represent to the route 
//when this route is called the template provided is viewed in index.html
blogApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  var checkoutState = {
    name: 'checkout',
    url: '/charge',
    template: '<check-out></check-out>'
  }
  $stateProvider.state(postsState);
  $urlRouterProvider.when('', '/products');
}]);
