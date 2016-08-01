var myNinjaApp= angular.module("myNinjaApp",[]);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){
// Object Oriented Programming!
//Outputting whole objects in an array.

  $scope.ninjas = [
{
  name: "Yoshi",
  belt: "green"
},
{
  name: "Crystal",
  belt: "yellow"
},
{
  name: "Ryu",
  belt: "orange"
},
{
  name: "Shaun",
  belt: "black"
}
  ];

}]);
