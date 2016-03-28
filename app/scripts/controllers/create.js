/**
 * Created by mboichuk on 24.03.16.
 */
'use strict'

angular.module('dashboardApp')
  .controller('CreateCtrl', function ($scope, TaskService, $timeout) {
    $scope.done = false;
    $scope.fadeIn = "";
    this.addTask = function(){
      if ($scope.inputForm.owner.$valid != true || $scope.inputForm.task.$valid != true){
        return 0;
      }
      var currentTasks = TaskService.getTasks();
      currentTasks.push({ownerName: $scope.ownerName,taskName: $scope.taskName});
      TaskService.setTasks(currentTasks);
      $scope.done = true;
      $scope.fadeIn = "fade-anim";
      $timeout(function () {
        $scope.done = false;
        $scope.fadeIn = "";
      }, 4000);

      $scope.ownerName = "";
      $scope.taskName = "";
    }
  });
