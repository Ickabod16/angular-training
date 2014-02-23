(function () {
  'use strict';

  var app = angular.module('main', [
    'templates-main',
    'templates-lib',
    'app',
    'common',
    'security',
    'ui.select2',
    'ui.bootstrap.datepicker',
    'ui.bootstrap.pagination',
    'ngResource',
    'ngSanitize'
  ]);

  app.config(function ($stateProvider, $urlRouterProvider, authorizationProvider) {
    $urlRouterProvider.otherwise("/app/timesheets");
  })

  .run(function ($log, $state, $rootScope, $stateParams) {
    // putting state into $rootScope so that these services are available in views
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    
    $log.info("Application running.");
  });

}());
