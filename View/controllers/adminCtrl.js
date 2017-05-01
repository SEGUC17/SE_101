angular.module('adminCtrl' , [])
.controller('adminCtrl' , function ($scope,$location,adminsrv,Auth){
  $scope.EditProducts = function(){
      $location.url('/admin/editProducts');
  };

  $scope.EditPlans = function(){
      $location.url('/admin/editPlans');
  };

  $scope.EditUsers = function(){
      $location.url('/admin/editUsers');
  };

  $scope.EditSponserAds = function(){
      $location.url('/admin/editSponserAds');
  };




  var ctrl = this;
  this.productName = '';
  this.productId = '';
  this.productDetails = '';
  this.productPrice = '';

  productssrv.getProductsList().success(function(productsList){
    $scope.products=productsList;
  })
  // send to service to create new product
  $scope.CreateNewProduct =function(){
    var data = {
                      'name':this.productName,
                      'details':this.productId,
                  //    'id' :productDetails,
                      'price':this.productPrice
                  }
    editproductssrv.makeProduct(data);
  }
  // send to service details to edit product
  $scope.EditProduct = function(){
    var data = {
                      'name':this.productName,
                      'details':this.productId,
                      'id' :this.productDetails,
                      'price':this.productPrice
                  }
    editproductssrv.editProduct(data);
  }
  // send product id to service to delete product
  $scope.DeleteProduct = function(data){
    deleteProduct(data);
  }
  // render create product page
  $scope.ToNewProduct = function(){
    this.productId = null;
    this.productName = null;
    this.productDetails = null;
    this.productPrice = null;
    $location.url('/admin/createNewProduct')
  }
  // render edit product page
  $scope.ToEditProduct = function(data){
    this.productId=data;
    this.productName = null;
    this.productDetails = null;
    this.productPrice = null;
    $location.url('/admin/editProduct')
  }

  $scope.setProductName = function(name){
    this.productName=name;
  }

  $scope.setProductPrice = function(price){
    this.productPrice=price;
  }

  $scope.setProductDetails=function(detaisl){
    this.productDetails=details;
  }

})


.factory('adminsrv', function($http){
  fitnessApp('editproductssrv', function($http){
    return{

  //get a list of json products
      getProductsList : function(){
        return $http.get('/products');
      },

  //send product details to make new produce
      makeProduct : function(data){
        $http.post('/addProduct',data);
      },

  // take product id and attribute value to change
      editProduct : function(data){
        $http.put('/editProduct',data);
      },

  // take product id to delete from model
      deleteProduct : function(data){
        $http.delete('/deleteProduct',data);
      }


    };
  });

});
