angular.module("interestsApp",["firebase"])
  .controller("FirstController",function($scope){
    $scope.interests = [{
      name:"Hackathon",
      //numberOfPeople:42,
      Description:"If you are interested in coding, click hackathon.",
      link:""
    },{
      name:"Soccer",
      //numberOfPeople:42,
      Description:"If you are interested in soccer, click soccer.",
      link:""
    },
	{
      name:"Basketball",
      //numberOfPeople:23,
      Description:"If you are interested in hooping, click basketball.",
      link:"https://docs.angularjs.org/api/ng/directive/ngHref"
    },
    {
      name:"Football",
      //numberOfPeople:55,
      Description:"If you are interested in football, click football.",
      link:""
    },
    {
      name:"Baseball",
      //numberOfPeople:23,
      Description:"If you are interested in baseball, click baseball.",
      link:""
    },
    {
      name:"Handball",
      //numberOfPeople:23,
      Description:"If you are interested in handball, you should click here.",
      link:""
    }];
});