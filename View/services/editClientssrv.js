fitnessApp('editClientssrv', function($http){
  return{
        getClientsList : function(){
      return $http.get('/viewUsers');
    },
