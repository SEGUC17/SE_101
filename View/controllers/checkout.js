angular.module('fitnessApp').
  component('checkOut', {
    templateUrl: 'partials/checkout.html',
    controller: function checkoutController($http) {
      var self = this;
      $http.get('https://localhost:3000//products/cart').then(function(response) {
        self.products = response.data.cart;
        self.total=response.data.total;
        
      });

        }
  });

