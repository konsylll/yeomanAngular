/**
 * Created by mboichuk on 24.03.16.
 */
'use strict'

angular.module('dashboardApp')
  .controller('CreateCtrl', function ($scope, TaskService, $timeout) {
    $scope.done = false;
    $scope.fadeIn = "";
    this.addTask = function(){
      var currentTasks = TaskService.getTasks();
      currentTasks.push({ownerName: $scope.ownerName,taskName: $scope.taskName});
      $scope.ownerName = "";
      $scope.taskName = "";
      TaskService.setTasks(currentTasks);
      $scope.done = true;
      $scope.fadeIn = "fade-anim";
      $timeout(function () {
        $scope.done = false;
        $scope.fadeIn = "";
      }, 4000);
    }
  });
