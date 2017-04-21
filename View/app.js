var fitnessApp = angular.module('fitnessApp', ['ui.router','chatController', 'checkoutController','chatSocket', 'socketService', 'btford.socket-io']);
//Each state url represent to the route 
//when this route is called the template provided is viewed in index.html
blogApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //checkout state : <check-out> refers to checkout component
  var checkoutState = {
    name: 'checkout',
    url: '/charge',
    template: '<check-out></check-out>'
  }
  $stateProvider.state(checkOutState);
  $urlRouterProvider.when('', '/products');
}]);
