/**
 * Created by mboichuk on 24.03.16.
 */
'use strict'

/**
 * @ngdoc function
 * @name dashboardApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('CreateCtrl', function ($scope, TaskService, $timeout) {
    $scope.done = false;
    this.addTask = function(){
      var currentTasks = TaskService.getTasks();
      currentTasks.push({ownerName: $scope.ownerName,taskName: $scope.taskName});
      $scope.ownerName = "";
      $scope.taskName = "";
      TaskService.setTasks(currentTasks);
      $scope.done = true;
      $timeout(function () {
        $scope.done = false;
      }, 500);
    }
  });
