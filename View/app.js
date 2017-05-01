angular.module('fitnessApp', [
	'app.routes',
	'ngRoute',
	'authService',
	'mainCtrl',
	'adminCtrl',
	'productsctrl',
	'plansctrl'
]).config(function($httpProvider)	{
	//attach our auth inteceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');
});
