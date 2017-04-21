fitnessApp('editSponserAdssrv', function($http){
  return{
    
        makeSponserAd : function(data){
      $http.post('/addSponserAd',data);
    },
    
        editSponserAd : function(data){
      $http.put('/editSponserAd',data);
    },


  
  }
