angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
    {
      id: 0,
      image: 'img/adam.jpg',
      name: 'Adam',
      nickname: 'adamkho'
    },
    {
      id: 1,
      image: 'img/ben.png',
      name: 'Ben',
      nickname: 'benjamin'
    },
    {
      id: 2,
      image: 'img/max.png',
      name: 'Max',
      nickname: 'maxpayne'
    },
    {
      id: 3,
      image: 'img/mike.png',
      name: 'Mike',
      nickname: 'mikespike'
    },
    {
      id: 4,
      image: 'img/perry.png',
      name: 'Perry',
      nickname: 'katyperry'
    },
    {
      id: 5,
      image: 'img/ben.png',
      name: 'Ben',
      nickname: 'benjamin'
    },
    {
      id: 6,
      image: 'img/max.png',
      name: 'Max',
      nickname: 'maxpayne'
    },
    {
      id: 7,
      image: 'img/mike.png',
      name: 'Mike',
      nickname: 'mikespike'
    }
  ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
