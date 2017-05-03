// connects to the back end to get ads which are needed to be deleted or edited, also adds the new ads into the back end 

fitnessApp('editSponserAdssrv', function($http){
  var List[];
  return{
    
      setList : function(value) {
        this.list=value;
      },

      getList : function() {
        return this.list;
        },
  //get a list of json ADS
      getAdsList : function(){
        return $http.get('/viewSponserAd');
      },
    
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
 
  
