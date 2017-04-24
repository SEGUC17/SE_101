var fitnessApp = angular.module('fitnessApp', ['ui.router','ngRoute','chatController','mainCtrl',
 'authService', 'checkoutController','chatSocket', 'socketService', 'btford.socket-io']);
//Each state url represent to the route
//when this route is called the template provided is viewed in index.html
fitnessApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //checkout state : <check-out> refers to checkout component
  var checkoutState = {
    name: 'checkout',
    url: '/checkout',
    template: '/partials/checkout.html'
  }
  $stateProvider.state(checkOutState);
  $urlRouterProvider.when('', '/products');
}]);

fitnessApp.config(function($routeProvider){
  when('/login', {
            templateUrl : '/partials/login.html',
        	controller   : 'mainController',
        	controllerAs   : 'login'
        })
  when('/', {
            templateUrl : '/partials/home.html',
            controller : 'homeCtrl',
            controllerAs : 'home'
        })

  when('/checkout',{
    templateUrl : '/partials/checkout.html',
    controller : 'checkoutController'
  })

  when('/admin' , {
    templateUrl : '/partials/adminPage.html',
    controller : 'adminPagectrl'
  })

  when('/admin/editProducts', {
    templateUrl : '/partials/adminEditProducts.html',
    controller : 'editProductsctrl'
  })


  when('/admin/editPlans', {
    templateUrl : '/partials/adminEditPlans.html',
    controller : 'plansctrl'
  })

  when('/admin/editUsers', {
    templateUrl : '/partials/adminEditUsers.html',
    controller : 'editUsersctrl'
  })

  when('/admin/editSponserAds', {
    templateUrl : '/partials/adminEditSponserAds.html',
    controller : 'editSponserAdsctrl'
  })
  
  when('/admin/createNewProduct',{
    templateUrl : '/partials/createNewProduct.html',
    controller : 'editProductsctrl'
  })
});
 fitnessApp.config(function($httpProvider){	
	//attach our auth inteceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');
});
 
