fitnessApp.controller('adminchatController', function($scope, $element, chatSocket, Session, $log) {
      $scope.message = "";
      $scope.messages = [];
      $http({
        url: 'https://localhost:3000/admin/chat',
        method: 'GET',
        params: {
          ':admin': Session._id,
          ':id': $scope.chat.id
        }
      }).then(function(response) {
        $scope.messages = response.chat.messages;
      });

      $scope.$watch('messageLog', function() {
        var textArea = $element[1].children[0];
        textArea.scrollTop = textArea.scrollHeight;
      });
      $scope.messageLog = 'Ready to chat!';
      $scope.sendMessage = function(msg) {
        if (msg != "") {
          $http({
            url: 'https://localhost:3000/admin/chat',
            method: 'POST',
            params: {
              ':id': Session._id,
              'text': msg
            }
          }).then(function(response) {
            chatSocket.emit('admin', Session._id, $scope.message);
            $scope.message = '';
          });
        }
      }

      $scope.$on('socket:user', function(event, data) {
        $log.debug('got a message', event.name);
        if (!data.payload) {
          $log.error('invalid message', 'event', event, 'data', JSON.stringify(data));
          return;
        }
        $scope.$apply(function() {
          $scope.messageLog = $scope.messageLog + data.source + data.payload;
        });

      });

      $scope.$on('socket:admin', function(event, data) {
        $log.debug('got a message', event.name);
        if (!data.payload) {
          $log.error('invalid message', 'event', event, 'data', JSON.stringify(data));
          return;
        }
        $scope.$apply(function() {
          $scope.messageLog = $scope.messageLog + data.source + data.payload;
        });

      });
    };
