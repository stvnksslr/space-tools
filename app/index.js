import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';

import './navbar';
import './km-tools'; // ooh look we are really importing ./km-tools/index.js

// Here we define the base space-tools app, this is the core of everything!
var spaceTools = angular.module('space-tools', ['ui.router', 'space-tools.navbar', 'space-tools.km-tools']);

spaceTools.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    console.log('otherwise home');

    // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./_home.html')
        });
}]);

// we might want to change this to be an indocument bootstrap
// angular.bootstrap(document.querySelector('html'), ['space-tools']);

export default spaceTools;
