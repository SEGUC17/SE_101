//here  you can view or delete
fitnessApp.controller('editClientsctrl', fuction($scope, editClientssrv){
                        editClientsssrv.getUsersList().success(function(UsersList){
    $scope.Users=UsersList;
  });


  editClientssrv.getClientsList().success(function(UsersList){
    $scope.clients=UsersList;
  });

  $scope.DeleteClients = function(data){
    editClientssrv.deleteClients(data);
  }
});


