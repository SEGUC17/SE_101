angular.module('checkOutService',[]).
factory('CartInfo', function ($http) {
  var checkOutFactory={};

  checkOutFactory.cart= function($http){
    $http.get('https://localhost:3000//products/cart').then(function(response) {
         return response;
       
      });

  }});