fitnessApp.controller('editproductsctrl', fuction($scope, editProductssrv){
  var productName;
  var productId;
  var productDetails;
  var productPrice;
  productssrv.getProductsList().success(function(productsList){
    $scope.products=productsList;
  });
// send to service to create new product
  $scope.CreateNewProduct =function(){
    var data = {
                      'name':productName,
                      'details':productId,
                  //    'id' :productDetails,
                      'price':productPrice
                  };
    editproductssrv.makeProduct(data);
  };
// send to service details to edit product
  $scope.EditProduct = function(){
    var data = {
                      'name':productName,
                      'details':productId,
                      'id' :productDetails,
                      'price':productPrice
                  };
    editproductssrv.editProduct(data);
  };
// send product id to service to delete product
  $scope.DeleteProduct = function(data){
    deleteProduct(data);
  };
// render create product page
  $scope.ToNewProduct = function(){
    productId = null;
    productName = null;
    productDetails = null;
    productPrice = null;
    $location.url('/admin/createNewProduct')
  };
// render edit product page
  $scope.ToEditProduct = function(data){
    productId=data;
    productName = null;
    productDetails = null;
    productPrice = null;
    $location.url('/admin/editProduct')
  };

  $scope.setProductName = function(name){
    productName=name;
  };

  $scope.setProductPrice = function(price){
    productPrice=price;
  };

  $scope.setProductDetails=function(detaisl){
    productDetails=details;
  };
});
