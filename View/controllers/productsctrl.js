//returns the list of products

fitnessApp.controller('productsctrl', fuction($scope, productssrv){

  productssrv.getProductsList().success(function(productsList){
    $scope.products=productsList;
  });


});
