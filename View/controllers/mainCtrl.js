angular.module('mainCtrl', ['authService'])

	.controller('homeCtrl', function(){
		var vm = this;
		vm.message = 'BE HEALTHY BEFIT';
	})

	.controller('mainController',['$scope','Auth','$location','$rootScope',
		function($rootScope,Auth,$location,$scope) {
		var vm = this;
		//get info if a person is logged in
		vm.loggedIn = Auth.isLoggedIn();

		//check to see if a user is logged in on every request
		$rootScope.$on('$routeChangeStart', function () {
			vm.loggedIn = Auth.isLoggedIn();
		});

		//function to handle login form
		vm.doLogin = function () {
			//processing Icon
			vm.processing = true;
			// clear error handling
			vm.error = '';

			// call the Auth.login() function
		Auth.login(vm.loginData.username, vm.loginData.password)
			.then(function (response) {
					vm.processing = false;
					console.log(response.data);
				if (response.data.success) {
					console.log("log log log");
					if(response.data.admin){
						//if admin successfull login redirect to admin page
						$location.path('/admin');
					}
					else {
						//if a user successfully logs in, redirect to homepage page
						$location.path('/home');
					}

					//this.user = 'name:unchanged';
					// Auth.getUser()
					// 	.then(function(response) {
					// 		$scope.name = response.data.name;
					// 	 })
					}
				else vm.error = response.data.message;
			});
		};

		//function to handle loggin out
		vm.doLogout = function () {
			Auth.logout();
			//reset all user info
			vm.user = {};
			$location.path('/login');
		}
	}]);
