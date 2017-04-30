angular.module('fitnessApp', [ 
	'app.routes',
	'authService',
	'mainCtrl',
	])
.config(function($httpProvider)	{	
	//attach our auth inteceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');
});
