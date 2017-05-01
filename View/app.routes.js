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
        .when('/about',{
          templateUrl : 'partials/about.html'
        })

        //login page
        .when('/login', {
            templateUrl : 'partials/login.html',
        	controller   : 'mainController',
        	controllerAs   : 'login'
        })

        .when('/products', {
          templateUrl : 'partials/products.html',
          controller   : 'productsctrl'
        })
    
          .when('/plans', {
          templateUrl : 'partials/plans.html',
          controller   : 'plansctrl'
        })


      //  admin page redirected after login
        .when('/admin' , {
          templateUrl : '/partials/adminPage.html',
          controller : 'adminCtrl'
        })
    
        .when('/admin/editPlans', {
          templateUrl : '/partials/editPlans.html',
          controller : 'adminCtrl'
        })
        
          .when('/admin/editProducts', {
          templateUrl : '/partials/editProducts.html',
          controller : 'adminCtrl'
        })
        //page with all plans to edit,delete or add
        // when('/admin/editPlans', {
        //   templateUrl : '/partials/adminEditPlans.html',
        //   controller : 'plansctrl'
        //   controllerAs   : 'adminPlans'
        // })

        //page with all products to edit,delete or add
        // .when('/admin/editProducts', {
        //   templateUrl : '/partials/adminEditProducts.html',
        //   controller : 'editProductsctrl',
        //   controllerAs   : 'adminProducts'
        // })

        // //admin edits a single product
        // when('/admin/editProduct', {
        //   templateUrl : '/partials/editProduct.html',
        //   controller : 'editProductsctrl'
        //   controllerAs   : 'adminProducts'
        // })

    // get rid of the hash in the URL
    $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
});
