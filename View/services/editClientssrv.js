//connects to the back end and gets the users that wants to be viewed or deleted

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
