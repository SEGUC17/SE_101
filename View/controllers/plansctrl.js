//returns the list of plans


angular.module('plansctrl' , [])
  .controller('plansctrl' , function($http,$scope, planssrv){

 $scope.plans= planssrv.getResult();
//$scope.products = [{name: "Test" , details: "bla bla" , price: 2.0}, {name: "Test1" , details: "bla bla" , price: 2.0}];

$scope.getPlans = function(){
  planssrv.getPlansList().then(function(response){

    planssrv.setResult(response.data);

    console.log(response.data);
    console.log(planssrv.getResult);
  });
}


  })

  .factory('planssrv', function($http){
    var result;
      return{

    //get a list of json products
        getPlansList : function(){
          return $http.get('/plans');
        },

        getResult : function() {
          return this.result;
        },

        setResult : function(value) {
          this.result=value;
        }
      };
    });
