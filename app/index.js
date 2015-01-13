import * as angular from 'angular';
import * as uiRouter from 'ui.router';

import './navbar';
import './km-tools/kmTools-router';

// Here we define the base space-tools app, this is the core of everything!
var mod = angular.module('space-tools', ['navbar', 'kmTools-router']);

mod.config(['$stateProvider', '$urlRouteProvider', function($stateProvider, $urlRouterProvider) {

    // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
        .state('home', {
        url: '/home',
        // need to convert this to template: fs.read
        // template:Url require.toUrl('./home/_home.html')
    });
    $urlRouterProvider.otherwise('/home');
}]);

// we might want to change this to be an indocument bootstrap
angular.bootstrap(document.querySelector('html'), ['space-tools']);
