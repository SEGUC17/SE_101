angular.module('fitnessApp').
  component('checkOut', {
    templateUrl: 'partials/checkout.html',
    controller: function checkoutController($http) {
      var self = this;
      this.heading = "Cart";


      $http.get('https://localhost:3000//products/cart').then(function(response) {
        self.products = response.cart;
        self.total=response.total;
        
      });

        }
  });
