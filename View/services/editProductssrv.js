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
