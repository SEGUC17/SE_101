var fitnessApp = angular.module('fitnessApp', ['ui.router','ngRoute','chatController', 'checkoutController','chatSocket', 'socketService', 'btford.socket-io']);
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

fitnessApp.config(function($routeProvider){

  when('/charge',{
    templateUrl : '/partials/checkout.html',
    controller : 'checkoutController'
  })

  when('/admin' , {
    templateUrl : '/partials/adminPage.html',
    controller : 'adminPagectrl'
  })

  when('/admin/editProducts', {
    templateUrl : '/partials/adminEditProducts.html',
    controller : 'adminEditProductsctrl'
  })

  when('/admin/editPlans', {
    templateUrl : '/partials/adminEditPlans.html',
    controller : 'adminEditPlansctrl'
  })

  when('/admin/editUsers', {
    templateUrl : '/partials/adminEditUsers.html',
    controller : 'adminEditUsersctrl'
  })

  when('/admin/editSponserAds', {
    templateUrl : '/partials/adminEditSponserAds.html',
    controller : 'adminEditSponserAdsctrl'
  })
});
