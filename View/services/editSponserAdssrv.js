fitnessApp('editSponserAdssrv', function($http){
  return{
    
        makeSponserAd : function(data){
      $http.post('/addSponserAd',data);
    },
    
    

  
  }
