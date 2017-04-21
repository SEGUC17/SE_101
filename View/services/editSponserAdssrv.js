// connects to the back end to get ads which are needed to be deleted or edited, also adds the new ads into the back end 

fitnessApp('editSponserAdssrv', function($http){
  return{
    
        makeSponserAd : function(data){
      $http.post('/addSponserAd',data);
    },
    
        editSponserAd : function(data){
      $http.put('/editSponserAd',data);
    },

    deleteSponserAd : function(data){
      $http.delete('/deleteProduct',data);
    }


  };
});
 
  
