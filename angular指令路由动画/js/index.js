var test = angular.module('test',['ngAnimate','ngRoute']);
test.controller('weixinCtrl',['$scope',function($scope){

}])
test.controller('tongxunluCtrl',['$scope',function($scope){
  
}])
test.controller('indexCtrl',['$scope',function($scope){
  $scope.title="微信";
  $scope.show = false;
  // $scope.setShow = function($event){
  //   $event.stopPropagation();
  //   $scope.show = !$scope.show;
  // }
  // document.onclick = function(){
  //   $scope.$apply(function(){
  //     $scope.show = false;
  //   })
  //   // console.log($scope.show);
  // }
}])
test.directive('uqTitle',[function(){
    return {
        replace:true,
        restrict:'EAC',//E A C M
        templateUrl:'../view/title.html',
        link:function($scope,elem){
          $('.drop').addClass('ng-hide');
          $('.add').on('click',function(){
              $('.drop').toggleClass('ng-hide');
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
      templateUrl:'../view/tab-bar.html'
    }
}]);

test.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  $routeProvider.when('/'{
      controller:'indexCtrl',
      templateUrl:'index.html',
      redirectTo:'/weixin'
  }).when('/weixin',{
    controller:'weixinCtrl',
    templateUrl:'views/weixin.html'
  }).when('/lianxiren',{
    controller:'tongxunluCtrl',
    templateUrl:'views/lianxiren.html'
  }).otherwise({
    redirectTo:'/weixin'
  });
  $locationProvider.html5Mode(true);
}]);
