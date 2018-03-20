//require('angular')

/*
var myApp = angular.module('myApp');*/
var timeoutTime = 60 * 1000;

function toRad(val) {
    return val * Math.PI / 180;
};

//myApp
var myApp = angular.module('myApp',['ngRoute','angular-notification-icons', 'ngAnimate', 'ui.select','ngSanitize']);


myApp.config(function($routeProvider)
{
    $routeProvider.
    when(
        '/',
        {
            templateUrl : 'html/views/home.html',
            controller  : 'HomeController'
        }
    ).
        when(
        '/store/select',
        {
            templateUrl : 'html/views/storeSelect.html',
            controller  : 'StoreSelectController'
        }
    ).
        when(
        '/questionnaire',
        {
            templateUrl : 'html/views/questionnaire.html',
            controller  : 'QuestionnaireController'
        }
    ).
        //when('/',{templateUrl:'html/views/', controller:''}).
        otherwise(
        {
            redirectTo  : 'html/views/home.html',
            controller  : 'HomeController'
        }
    );
});