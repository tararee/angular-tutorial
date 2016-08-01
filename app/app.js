var myNinjaApp= angular.module("myNinjaApp",[]);
//A controller controls our application data.

myNinjaApp.controller('NinjaController', function($scope){
// the scope of the .message is only within the div with ng-controller,
// it wouldn't show up outside of is
  $scope.message= "Hey y'all";

  $scope.ninjas = ['yoshi', 'ryu', 'crystal',]

});
