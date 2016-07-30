var stu = angular.module('stuManager',[]);
stu.controller('mainCtrl',['$scope',function($scope){
	$scope.type='table';
	if( localStorage.stu){
		$scope.students = angular.fromJson(localStorage.stu)
	}else{
		$scope.students = [
	   {name:'Alen',id:1001,sex:'male'},
       {name:'Amy',id:1002,sex:'famel'},
       {name:'Bob',id:1003,sex:'famel'},
       {name:'Mark',id:1004,sex:'male'},
       {name:'Gary',id:1005,sex:'male'},
       {name:'Ruby',id:1006,sex:'male'},
       {name:'Sophio',id:1007,sex:'male'},
       {name:'Kirs',id:1008,sex:'male'},
		];
	}
	$scope.type="table";
	
	$scope.saveData = function(){
		localStorage.stu = angular.toJson(this.students)
	}
	$scope.deleteStu = function(id){
		$scope.students = $scope.students.filter(function(v,i){
			return i!==id;
		})
		this.saveData();
	}

	$scope.addStu =  function(){
       	var student = {
       		id:Math.max.apply('',$scope.students.map(function(v,i){
       			return v.id;
       		}))+1,
       		name:'',
       		sex:''
       	};
       	this.students.push(student);
       	this.saveData();
       }

      }]);