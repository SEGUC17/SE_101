angular.module('fitnessApp').
factory('chatSocket', function (socketFactory) {
      var socket = socketFactory();
      socket.forward('admin');
      socket.forward('user');
      return socket;
  });
