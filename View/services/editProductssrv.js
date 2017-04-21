fitnessApp('editproductssrv', function($http){
  return{


    getProductsList : function(){
      return $http.get('/products');
    },


    makeProduct : function(data){
      $http.post('/addProduct',data);
    },


    editProduct : function(data){
      $http.put('/editProduct',data);
    },
    

    deleteProduct : function(data){
      $http.delete('/deleteProduct',data);
    }


  };
});
