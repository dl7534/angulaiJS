var todo = angular.module('todoList',[]);
todo.controller('mainCtrl',['$scope',function($scope){
	
		$scope.qingdan = [
      {
        id:1001,
        name:'购物',
        theme:'red',
        shixiang:[
          {name:'手机',state:true},
          {name:'电话',state:false},
          {name:'平板',state:false}
        ]
      },
      {
        id:1002,
        name:'买书',
        theme:'purple',
        shixiang:[
          {name:'java',state:true},
          {name:'php',state:true},
          {name:'angular',state:true},
          {name:'angular',state:false},
          {name:'angular',state:false},
        ]
      },
      {
        id:1003,
        name:'买车',
        theme:'purple',
        shixiang:[
          {name:'大车',state:true},
          {name:'小车',state:false},
          {name:'火车',state:false},
          {name:'火车',state:false},
          {name:'火车',state:false},
          {name:'火车',state:false},
          {name:'火车',state:false},
        ]
      }
    ];
	
    $scope.currentQingdan = null;
    $scope.saveData = function(){
		localStorage.todo = angular.toJson(this.todo)
	}
    

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
    $scope.tan = function(){
    	$scope.
    }
  }]);

     
