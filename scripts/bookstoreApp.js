/**
 * Created by hunao on 2017/5/19.
 */
var bsApp = angular.module('bsApp',['ui.router']);
bsApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'view/home.html'
        })
        //文学页面路由设置
        .state('literature',{
            url:'/literature',
            templateUrl:'view/literature/literature.html',
            controller:'litController'
        })
        .state('literature.novel',{
            url:'/novel',
            templateUrl:'view/literature/novel.html',
            controller:'novController'
        })
        .state('literature.poetry',{
            url:'/poetry',
            templateUrl:'view/literature/poetry.html',
            controller:'poeController'
        })

        //社科页面路由
        .state('Social science',{
            url:'/Social science',
            templateUrl:'view/social science/Social science.html'
        })

        //经管页面
        .state('Business&Economics',{
            url:'/Business&Economics',
            templateUrl:'view/business/Business&Economics.html'
        })

        //艺术页面
        .state('art',{
            url:'/art',
            templateUrl:'view/art/art.html'
        })

        //科学页面
        .state('science',{
            url:'/science',
            templateUrl:'view/science/science.html'
        })

        //计算机页面
        .state('computer',{
            url:'/computer',
            templateUrl:'view/computer/computer.html'
        })
        // 登录页面
        .state('login',{
            url:'/login',
            templateUrl:'view/login.html'
        })
        // 注册页面
        .state('signup',{
            url:'/signup',
            templateUrl:'view/signup.html',
            controller:'sgController'
        })
}]);


bsApp.controller('sgController',['$scope',function ($scope) {
    $scope.sendData = function () {
        console.log('注册信息已提交!');
    };
}]);

bsApp.controller('novController',['$scope','$http',function ($scope, $http) {
    $http({
        method:'get',
        url:'json/lit-data.json'
    }).then(function (response) {
        $scope.data = response.data;
    },function (response) {
        console.log(response);
    });
}]);

bsApp.controller('litController',['$scope','$http',function ($scope, $http) {
    $http({
        method:'get',
        url:'json/lit-list.json'
    }).then(function (response) {
        $scope.list = response.data;
    },function (response) {
        console.log(response);
    });
}]);

bsApp.controller('poeController',['$scope','$http',function ($scope, $http) {
    $http({
        method:'get',
        url:'json/lit-poetry.json'
    }).then(function (response) {
        $scope.poetry = response.data;
    },function (response) {
        console.log(response);
    });
}]);
