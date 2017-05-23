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
        .state('literature.biography',{
            url:'/biography',
            templateUrl:'view/literature/biography.html'
        })
        .state('literature.masterpiece',{
            url:'/masterpiece',
            templateUrl:'view/literature/masterpiece.html'
        })
        .state('literature.literary criticism',{
            url:'/literary criticism',
            templateUrl:'view/literature/literary criticism.html'
        })
        .state('literature.contemporary',{
            url:'/contemporary',
            templateUrl:'view/literature/contemporary.html'
        })

        //社科页面路由
        .state('Social science',{
            url:'/Social science',
            templateUrl:'view/social science/Social science.html'
        })
        .state('Social science.history',{
            url:'/history',
            templateUrl:'view/social science/history.html'
        })
        .state('Social science.philosophy',{
            url:'/philosophy',
            templateUrl:'view/social science/philosophy.html'
        })
        .state('Social science.law',{
            url:'/law',
            templateUrl:'view/social science/law.html'
        })
        .state('Social science.psychology',{
            url:'/psychology',
            templateUrl:'view/social science/psychology.html'
        })
        .state('Social science.Sinology',{
            url:'/Sinology',
            templateUrl:'view/social science/Sinology.html'
        })
        .state('Social science.political',{
            url:'/political',
            templateUrl:'view/social science/political.html'
        })

        //经管页面
        .state('Business&Economics',{
            url:'/Business&Economics',
            templateUrl:'view/business/Business&Economics.html'
        })
        .state('Business&Economics.economics',{
            url:'/economics',
            templateUrl:'view/business/economics.html',
            controller:'busController'
        })
        .state('Business&Economics.management',{
            url:'/management',
            templateUrl:'view/business/management.html'
        })
        .state('Business&Economics.marketing',{
            url:'/marketing',
            templateUrl:'view/business/marketing.html'
        })
        .state('Business&Economics.economic law',{
            url:'/economic law',
            templateUrl:'view/business/economic law.html'
        })
        .state('Business&Economics.financial',{
            url:'/financial',
            templateUrl:'view/business/financial.html'
        })
        .state('Business&Economics.e-commerce',{
            url:'/e-commerce',
            templateUrl:'view/business/e-commerce.html'
        })

        //艺术页面
        .state('art',{
            url:'/art',
            templateUrl:'view/art/art.html'
        })
        .state('art.photography',{
            url:'/photography',
            cache:'true',
            templateUrl:'view/art/photography.html'
        })
        .state('art.music',{
            url:'/music',
            templateUrl:'view/art/music.html'
        })
        .state('art.painting',{
            url:'/painting',
            templateUrl:'view/art/painting.html'
        })
        .state('art.architecture',{
            url:'/architecture',
            templateUrl:'view/art/architecture.html'
        })
        .state('art.design',{
            url:'/design',
            templateUrl:'view/art/design.html'
        })

        //科学页面
        .state('science',{
            url:'/science',
            templateUrl:'view/science/science.html'
        })
        .state('science.popular science',{
            url:'/popular science',
            templateUrl:'view/science/popular science.html'
        })
        .state('science.medical',{
            url:'/medical',
            templateUrl:'view/science/medical.html'
        })
        .state('science.industry',{
            url:'/industry',
            templateUrl:'view/science/industry.html'
        })
        .state('science.telecommunications',{
            url:'/telecommunications',
            templateUrl:'view/science/telecommunications.html'
        })
        .state('science.agriculture',{
            url:'/agriculture',
            templateUrl:'view/science/agriculture.html'
        })

        //计算机页面
        .state('computer',{
            url:'/computer',
            templateUrl:'view/computer/computer.html'
        })
        .state('computer.assembly language',{
            url:'/assembly language',
            templateUrl:'view/computer/assembly language.html'
        })
        .state('computer.web',{
            url:'/web',
            templateUrl:'view/computer/web.html'
        })
        .state('computer.database',{
            url:'/database',
            templateUrl:'view/computer/database.html'
        })
        .state('computer.graphics',{
            url:'/graphics',
            templateUrl:'view/computer/graphics.html'
        })
        .state('computer.office',{
            url:'/office',
            templateUrl:'view/computer/office.html'
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

bsApp.controller('busController',['$scope','$http',function ($scope, $http) {
    $http({
        method:'get',
        url:'json/econ-data.json'
    }).then(function (response) {
        $scope.data = response.data;
    },function (response) {
        console.log(response);
    });
}]);

