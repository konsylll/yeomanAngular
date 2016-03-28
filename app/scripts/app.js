'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]).config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('main',{
    url:"/",
    templateUrl: "views/main.html"
  }).state('create',{
    url: "/create",
    templateUrl: "views/create.html",
    controller: "CreateCtrl",
    controllerAs: "create"
  }).state('tasks',{
    url: "/tasks",
    templateUrl: "views/tasks.html",
    controller: "TasksCtrl",
    controllerAs: "tasks"
  })
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
  //     .when('/create', {
  //       templateUrl: 'views/create.html',
  //       controller: 'CreateCtrl',
  //       controllerAs: 'create'
  //     })
  //     .when('/tasks', {
  //       templateUrl: 'views/tasks.html',
  //       controller: 'TasksCtrl',
  //       controllerAs: 'tasks'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  }).service('TaskService', function(){

    this.setTasks = function(tasks){
      localStorage.setItem("taskService", angular.toJson(tasks));
    }
    this.getTasks = function(){
      if (localStorage.getItem("taskService")!=null) {
        return angular.fromJson(localStorage.getItem("taskService"));
      }  else {
        return [];
      }
    }
  });
