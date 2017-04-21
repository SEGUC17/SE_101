fitnessApp.controller('adminPagectrl', function($scope, adminPagectrl,$location){

  $scope.EditProducts = function(){
      $location.url('/admin/editProducts');
  };

  $scope.EditPlans = function(){
      $location.url('/admin/editPlans');
  };

  $scope.EditUsers = function(){
      $location.url('/admin/editUsers');
  };

  $scope.EditSponserAds = function(){
      $location.url('/admin/editSponserAds');
  };
})
