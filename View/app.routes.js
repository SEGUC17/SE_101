angular.module('app.routes', ['ngRoute'])
// configure our routes
.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'partials/home.html',
            controller : 'homeCtrl',
            controllerAs : 'home'
        })

        //login page
        .when('/login', {
            templateUrl : 'partials/login.html',
        	controller   : 'mainController',
        	controllerAs   : 'login'
        });
    // get rid of the hash in the URL
    $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
});
