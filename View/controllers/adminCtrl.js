angular.module('adminCtrl' , ['authService'])
.controller('adminCtrl' , function ($scope,$location,adminsrv,Auth,AuthToken){
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
  this.planName = '';
  this.planDetails = '';
  this.planId = '';
    $scope.products=adminsrv.getList();
    $scope.plans = adminsrv.getList2();

  adminsrv.getProductsList().then(function(response){
    adminsrv.setList(response.data);
  })

  adminsrv.getPlansList().then(function(response){
    adminsrv.setList2(response.data);
  })
  // send to service to create new product
  $scope.CreateNewProduct =function(){
    var data = {
                      'name':this.productName,
                      'details':this.productId,
                  //    'id' :productDetails,
                      'price':this.productPrice
                  }
    editadminsrv.makeProduct(data);
  }
  // send to service details to edit product
  $scope.EditProduct = function(){
    var data = {
                      'name':this.productName,
                      'details':this.productId,
                      'id' :this.productDetails,
                      'price':this.productPrice
                  }
    editadminsrv.editProduct(data);
  }
  // send product id to service to delete product
  $scope.DeleteProduct = function(response){
    var id = Auth.getID();
    console.log(id);
    var data = {
      'product.id' : response,
      'user._id' : id
    }
    adminsrv.deleteProduct(data);
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
  $scope.ToEditPlan = function(data){

  }
  $scope.Deleteplan = function(data){

  }
  $scope.ToNewplan = function(){

  }
})


.factory('adminsrv', function($http){
  var list = [];
  var list2 = [];
    return{

      setList : function(value) {
        this.list=value;
      },

      getList : function() {
        return this.list;
        },
  //get a list of json products
      getProductsList : function(){
        return $http.get('/products');
      },

      setList2 : function(value) {
        this.list2=value;
      },

      getList2 : function() {
        return this.list2;
        },
  //get a list of json products
      getPlansList : function(){
        return $http.get('/plans');
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
