'use strict';

import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';

import './pilot-stats';
//import './corp-stats';
import './alliance-stats';
import './kill-details';

var kmTools = angular.module('space-tools.km-tools', ['ui.router', 
                                                      'space-tools.km-tools.kill-details', 
                                                      'space-tools.km-tools.pilot-stats', 
                                                      // 'space-tools.km-tools.corp-stats', 
                                                      'space-tools.km-tools.alliance-stats']);

kmTools.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('km-tools', {
        abstract: true,
        url: '/km-tools',
        // Note: abstract still needs a ui-view for its children to populate.
        // You can simply add it inline here.
        template: '<ui-view/>'
    });

}]);

export default kmTools;
