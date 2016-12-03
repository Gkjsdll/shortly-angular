angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};

  $scope.signout = Auth.signout;
  $scope.addLink = function(url) {
    Links.addOne({url: url}).then(function(resp) {
      $scope.link = resp.data;
    });
  };
});
