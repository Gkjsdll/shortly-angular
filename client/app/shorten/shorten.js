angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.signout = Auth.signout;
  $scope.addLink = Links.addOne;
});
