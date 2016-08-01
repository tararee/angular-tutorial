var myNinjaApp= angular.module("myNinjaApp",[]);
//A controller controls our application data.

// TO PROTECT SCOPE VARIABLES FROM MINIFICATION!!!
//We have to pass the function and any dependencies through an array.
//then we define the dependencies($scope here) within the arrays.
myNinjaApp.controller('NinjaController', ['$scope', function($scope){
// the scope of the .message is only within the div with ng-controller,
// it wouldn't show up outside of is
  $scope.message= "Hey y'all";

  $scope.ninjas = ['yoshi', 'ryu', 'crystal',]

}]);
