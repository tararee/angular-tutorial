var myNinjaApp= angular.module("myNinjaApp",[]);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){
// Object Oriented Programming!
//Outputting whole objects in an array.

  $scope.ninjas = [
{
  name: "Yoshi",
  belt: "green",
  rate: 50
},
{
  name: "Crystal",
  belt: "yellow",
  rate: 30
},
{
  name: "Ryu",
  belt: "orange",
  rate: 10
},
{
  name: "Shaun",
  belt: "black",
  rate: 1000
}
  ];

}]);
