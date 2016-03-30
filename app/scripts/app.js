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
  }).directive('rtask', function(){
  var directive = {};
  directive.restrict = "E";
  directive.template = "<div class='container-marged-bottom'>" +
    "<div class='row'><div class='pull-left col-md-4 text-left vhcenter'><b>{{task.ownerName}}</b></div>" +
    "<div class='col-md-4 vhcenter'><b>{{task.taskName}}</b></div>" +
    "<div class='col-md-4'><button class='btn btn-danger pull-right vhcenter' ng-click='tasks.deleteTask($index)'>Delete</button></div>" +
    "</div></div>";

  return directive;
}).directive('taskHeader', function(){
  var directive = {};
  directive.restrict = "E";
  directive.template = "<div class='container-marged-bottom'>" +
    "<div class='row'><div class='pull-left col-md-4 text-left vhcenter'><b>Owner</b></div>" +
    "<div class='col-md-4 vhcenter'><b>Task</b></div>" +
    "<div class='col-md-4'><button class='btn btn-danger pull-right vhcenter' ng-click='tasks.deleteAll()'>Delete All</button></div>" +
    "</div></div><hr>";
  return directive;
});
