fitnessApp.controller('editproductsctrl', fuction($scope, editProductssrv){

  productssrv.getProductsList().success(function(productsList){
    $scope.products=productsList;
  });

  $scope.CreateNewProduct =function(data){
    editproductssrv.makeProduct(data);
  };

  $scope.EditProduct = function(data){
    editproductssrv.editProduct(data);
  };

  $scope.DeleProduct = function(data){
    deleteProduct(data);
  }
});
