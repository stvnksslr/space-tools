import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';

import './pilot-stats';

var kmTools = angular.module('space-tools.km-tools', ['space-tools.km-tools.pilot-stats']);

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
