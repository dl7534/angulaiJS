var todo = angular.module('todoList',[]);
todo.controller('mainCtrl',['$scope',function($scope){
    $scope.qingdan = [
      {
        id:1001,
        name:'购物',
        theme:'red',
        shixiang:[
          {name:'xiangjiao',state:true},
          {name:'apple',state:false},
          {name:'orange',state:false}
        ]
      },
      {
        id:1002,
        name:'买书',
        theme:'purple',
        shixiang:[
          {name:'java',state:true},
          {name:'php',state:false},
          {name:'angular',state:false}
        ]
      },
      {
        id:1003,
        name:'买钱',
        theme:'purple',
        shixiang:[
          {name:'meiyuan',state:true},
          {name:'renmingbi',state:false},
          {name:'riyuan',state:false}
        ]
      }
    ];
    
    $scope.currentQingdan = null;

    var colors = ['green','yellow','red','brown','orange','purple','pink'];
    $scope.addQingdanItem = function(){
      var len = $scope.qingdan.length;
      var id = ( len === 0)?
      1001:
      (Math.max.apply(null,$scope.qingdan.map(function(v,i){
        return Number(v.id);
      })) + 1);
      var qingdan = {
        id: Number(id),
        name: '新清单 ' + (len + 1),
        theme: colors[len%7],
      }
      $scope.currentQingdan = qingdan;
      $scope.qingdan.push(qingdan);
    }

    $scope.setCurrent = function(index){
      $scope.currentQingdan = $scope.qingdan[index];
    }


  }]);
