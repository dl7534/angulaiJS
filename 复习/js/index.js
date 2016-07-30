var stu = angular.module('stuManger',[])
stu.controller('mainCtrl',['$scope',function($scope){
    $scope.type = 'table';
    if(localStorage.stu){
       $scope.students = angular.fromJson(localStorage.stu)
    }else{
      $scope.students = [
        {name:'ding',id:1002,sex:'nan',},
        {name:'ding',id:1002,sex:'nan',},
        {name:'ding',id:1002,sex:'nan',},
        {name:'ding',id:1002,sex:'nan',},
       ]
    }
    $scope.saveData = function(){
      localStorage.stu = angular.toJson(this.students)
    }
}])

var test = angular.module('test',['ngAnimate','ngRoute']);
test.controller('indexCtrl',['$scope',function($scope){
    text.directive('uqTitle',[function(){
      return {
        replace:true,
        restrict:'E',
        templateUrl:'view/uqTitle.html',
        link:function($scope,elem){
          $('.drop').addClass('ng-hide');
          $('.add').on('click',function(){
              $('.add').toggleClass('ng-hide');
              return false;

          })
          $(document).on('click',function(){
            $('.drop').addClass('ng-hide');
        })
        }
      }
    }]).directive('uqTabBar',[function(){
      return {
        restrict:'E',
        templateUrl:'view/uqlist.html',
        
      }
    }])
}])