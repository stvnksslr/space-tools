/**
 * Created by skessler on 12/1/14.
 */

(function() {
    'use strict';

    var moduleName = 'space-tools.kmTools-router',

        angularDependencies = ['ui.router'];

    define([
        'require',
        'angular',
        'ui.router'
    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        module.config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider

                // nested list with custom controller
                .state('km-tools.pilotStats', {
                    url: '/pilotStats',
                    templateUrl: require.toUrl('./km-tools/pilotStats/_pilotStats.html'),
                    controller: function($scope) {
                    }
                })
        });

        return module;
    });
})();