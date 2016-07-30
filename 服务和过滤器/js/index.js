  var x = angular.module('x',[]);

  x.filter('moshouqianzhui',[function(){
    return function(diyi){
      var str = (Math.random()>0.5)?'天灾':'守卫';
      return '@' + str +'-' + diyi;
    }
  }])

  x.filter('count',[function(){
    return function(ar,num){
      var count = 0;
      for (var i = 0; i < ar.length; i++) {
          if(ar[i].score > num ){
            count++;
          }
      }
      return count;
    }
  }])

  x.filter('format',[function(){
      var r = function(num){
        //160
        var m =  parseInt(num/60);
        var s = num%60;
        return m + ':' + s;
      }                            
      return function(arr){
        var n = [];
        for (var i = 0; i < arr.length; i++) {
          arr[i].duration = r(arr[i].duration);
          n.push(arr[i]);
        }
        return n;
      }
    }])


    x.controller('mainCtrl',['$scope','$filter',function($scope,$filter){
      $scope.str = 'abcd';
      $scope.num = 1234.56789;
      $scope.jiage = 231311123.4;
      $scope.list = [
        {name:'赞米',age:12,score:100},
        {name:'张三',age:13,score:93},
        {name:'李四',age:14,score:62},
        {name:'王五',age:16,score:54}
      ];
      $scope.music = [
        {name:'a',duration:160},
        {name:'a',duration:230},
      ]
      $scope.music = $filter('format')($scope.music);
    }])
