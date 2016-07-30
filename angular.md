# angular.js

一个全局对象 angular
```javascript
{
  fromJson:fn,
  toJson:fn,
  forEach:fn,
  module:fn(str,array)
}
一个模块对象的内部结构
{
  controller:fn,
  directive:fn,
  config:fn,

  factory:fn,
  service:fn,
  constant:fn,
  value:fn,

  filter:fn,
}
$scope, $location, $routeProvider
$routePramas
```

## 基本使用
```html
<html ng-app="nw">
<body ng-cotroller="mainCtrl">
<script>
var nw = angular.module('nw',[]);
nw.controller('mainCtrl',['$scope',function($scope){

}])
</script>
```html

## 模块

<script src="angular-animate.js"></script>
它就是一个模块
var nw = angular.module('nw',['ngAnimate'])

## 控制器

nw.controller('mainCtrl',['$scope',function($scope){
  $scope.state = true;
}])
{{state}} ng-bind
> 双向数据绑定
> 作用域 (controller开始和结束标签之间)

## 装饰性指令

> 在页面的装饰性指令中可以使用angular表达式
> ng-repeat在angular的指令中拥有最高优先级1000
ng-repeat="x in list" $index $last $first $middel  $odd $even
ng-bind === {{}}
ng-class="{a:(state==false),b:ex,c:ex}"
ng-if
ng-show
ng-hide
ng-click
ng-dblclick
ng-[event]

## 组件化开发

> angular会以ajax请求的方式去调用
> 我们写的html页面
nw.directive('uqTab',[function(){
  return {
        restrict:'AEC',
        replace:true
        template:'<div></div>'
        templageUrl:'views/tab.html',
        link:function($scope,em){}
  }
}]);
<uq-tab></uq-tab> ===>  views/x.html
在x.html中只能用一个div把所有的元素都包起来
<div class="">
    xadfadfa
</div>

## 在指令中使用jQuery

angular内部提供了一个jqLite
angular.elements()  ===   $();
在指令的link函数中不想使用jqLite
先引入jquery 再引入angular
angular会自动把jqLite 替换为 jQuery
在指令的link函数中去添加事件 操作DOM

## 使用路由
<script src="angular-route.js"></script>
index.html/#/weixin
index.html/#/lianxiren
<uq-title></uq-title>
<ng-view></ng-view>
<uq-table></uq-table>
var nw = angular.module('nw',['ngRoute']);
nw.config(['$routeProviver',function(){
  $routeProviver.when('/weixin',{
    controller:'weixinCtrl'
    templateUrl:'views/weixin.html',
  })
}])

## 使用动画
<script src="angular-animate.js"></script>
var nw = angular.module('nw',['ngAnimate']);

ng-if       .ng-hide
div{
  transition: all .8s ease;
}
div.ng-hide{
  opacity:0;
}
ng-class .add .remove
ng-repeat  .enter .enter-active
           .leave .leave-active
ng-view    .enter .enter-active
           .leave .leave-active  

## 使用内置服务

把服务依赖注入到 控制器，指令，服务，过滤器
$scope   $routeProvider  $location