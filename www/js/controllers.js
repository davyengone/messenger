angular.module('starter.controllers', [])

.controller('SignupCtrl', function($scope, $ionicLoading, $timeout, $state) {
  $scope.done = function() {
    $ionicLoading.show({
      template: '<ion-spinner></ion-spinner>'
    });

    $timeout(function() {
      $ionicLoading.hide();
      $state.go('home.feeds');
    }, 2000);
  }
})

.controller('DemoCtrl', function($scope, $ionicActionSheet, $cordovaCamera, $ionicModal, Chats, Tumblr) {
  Tumblr.get().then(function(res) {console.log(res);})
  $scope.contacts = Chats.all();

  $scope.refresh = function() {
    // Stop the ion-refresher from spinning
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.actionSheet = function() {
    var hideSheet = $ionicActionSheet.show({
      titleText: 'Additional Methods of Contact',
      buttons: [
        { text: 'another_nickname_1' },
        { text: 'another_nickname_2' }
      ],
      destructiveText: 'Block or report',
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index) {
        return true;
      }
    });
  }

  $scope.takePhoto = function() {
    $scope.capturedImage = ''; 

    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 200,
      targetHeight: 200,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.capturedImage = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      alert(err);
    });
  }

  // Settings modal
  $ionicModal.fromTemplateUrl('templates/settings/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  // New message modal
  $ionicModal.fromTemplateUrl('templates/contact/new_message.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openNew = function() {
    $scope.modal.show();
  };
  $scope.closeNew = function() {
    $scope.modal.hide();
  };
})

.controller('MessageCtrl', function($scope, $stateParams, Chats) {
  $scope.recipient = Chats.all()[$stateParams.id];
  $scope.title = $scope.recipient.name;

})
