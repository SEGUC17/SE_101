fitnessApp.controller('editSponserAdsctrl', fuction($scope, editSponserAdssrv){
  var sponserAdName;
  var sponserAdId;
  var sponserAdDetails;

  $scope.CreateNewSponserAd =function(data){
    var data{
      'name':sponserAdName,
      'details':sponserAdDetails,
      'id':sponserAdId

    };
    editSponserAdssrv.makeSponserAd(data);
  };

  $scope.EditSponserAd = function(data){
    var data{
      'name':sponserAdName,
      'details':sponserAdDetails,
      'id':sponserAdId

    };
    editSponserAdssrv.editSponserAd(data);
  };

  $scope.DeleteSponserAd = function(data){
    editSponserAdssrv.deleteSponserAd(data);
  }
});


  $scope.ToNewSponserAd = function(){
    sponserAdId = null;
    sponserAdName = null;
    sponserAdDetails = null;
    $location.url('/admin/createNewSponserAd')
  };

  $scope.ToEditSponserAd = function(data){
    sponserAdId=data;
    sponserAdName = null;
    sponserAdDetails = null;
    $location.url('/admin/editSponserAds')
  };

  $scope.setsponserAdName = function(name){
    productName=name;
  };

  $scope.setsponserAdDetails=function(detaisl){
    productDetails=details;
  };
});
