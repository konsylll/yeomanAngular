/**
 * Created by mboichuk on 24.03.16.
 */
'use strict'

angular.module('dashboardApp')
  .controller('TasksCtrl', function ($scope, TaskService) {
    this.taskArray = TaskService.getTasks();
    this.deleteTask = function(index){
      var currentTasks = TaskService.getTasks();
      currentTasks.splice(index,1);
      TaskService.setTasks(currentTasks);
      this.taskArray = TaskService.getTasks();
    }
    this.deleteAll = function(){
      TaskService.setTasks([]);
      this.taskArray = TaskService.getTasks();
    }
  });
