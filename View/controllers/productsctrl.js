//returns the list of products


angular.module('productsctrl' , [])
  .controller('productsctrl' , function($http,$scope, productssrv){

 $scope.products= productssrv.getResult();
//$scope.products = [{name: "Test" , details: "bla bla" , price: 2.0}, {name: "Test1" , details: "bla bla" , price: 2.0}];

$scope.getProducts = function(){
  productssrv.getProductsList().then(function(response){

    productssrv.setResult(response.data);

    console.log(response.data);
    console.log(productssrv.getResult);
  });
}


  })

  .factory('productssrv', function($http){
    var result;
      return{

    //get a list of json products
        getProductsList : function(){
          return $http.get('/products');
        },

        getResult : function() {
          return this.result;
        },

        setResult : function(value) {
          this.result=value;
        }
      };
    });
