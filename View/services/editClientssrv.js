//connects to the back end and gets the users that wants to be viewed or deleted

fitnessApp('editClientssrv', function($http){
 
  var list = [];
    return{

      setList : function(value) {
        this.list=value;
      },

      getList : function() {
        return this.list;
        },
  //get a list of json clients
      getUsersList : function(){
        return $http.get('/viewUsers');
      },

   
    getClientsList : function(){
      return $http.get('/viewUsers');
    },
    
        deleteClients : function(data){
      $http.delete('/deleteUsers',data);
    }


  };
});
