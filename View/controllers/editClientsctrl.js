fitnessApp.controller('editClientsctrl', fuction($scope, editClientssrv){


  editClientssrv.getClientsList().success(function(clientsList){
    $scope.clients=clientsList;
  });

  $scope.DeleteClients = function(data){
    editClientssrv.deleteClients(data);
  }
});
