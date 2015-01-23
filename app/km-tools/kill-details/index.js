'use strict';

import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';

var killDetails = angular.module('space-tools.kill-details', ['ui.router']);

killDetails.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('km-tools.kill-details', {
        url: '/kill-details/:killmailID',
        template: require('./_kill-details.html'),
        controller: 'KillDetailsCtrl',
        controllerAs: 'KillDetails'
    });

}]);

export default killDetails;
