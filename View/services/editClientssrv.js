fitnessApp('editClientssrv', function($http){
  return{
   
    getClientsList : function(){
      return $http.get('/viewUsers');
    },
    
        deleteClients : function(data){
      $http.delete('/deleteUsers',data);
    }


  };
});
