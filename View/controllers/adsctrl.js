//shows the list of ads on the page
fitnessApp.controller('adsctrl', fuction($scope, editSponserAdssrv){

  editSponserAdssrv.getsSponserAds().success(function(SponserAds){
    $scope.SponserAds=SponserAds;
  });


});
