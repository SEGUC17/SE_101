fitnessApp.controller('adminChatsctrl', function($scope, $element, chatSocket, Session, $log) {
    $scope.chats = [];
      $http({
        url: 'https://localhost:3000/admin/chat',
        method: 'GET',
        params : {
          ':id' : Session._id
        }
      }).then(function(response) {
        $scope.chats = response.chat;
      });
    };
