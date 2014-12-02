/**
 * Created by skessler on 12/1/14.
 */

(function() {
    'use strict';

    var moduleName = 'space-tools.router',

        angularDependencies = ['ui.router', 'space-tools.kills.killmail', 'space-tools.kills.pilotStats'];

    define([
        'require',
        'angular',
        'ui.router',
        'router',
        './kills/kills',
        './kills/pilotStats',
        './kills/killmail'
    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        module.config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/kills');

            $stateProvider

                // HOME STATES AND NESTED VIEWS ========================================
                .state('kills', {
                    url: '/kills',
                    templateUrl: require.toUrl('./kills/_kills.html')
                })

                // nested list with custom controller
                .state('kills.pilotStats', {
                    url: '/pilotStats',
                    templateUrl: require.toUrl('./kills/_pilotStats.html'),
                    controller: function($scope) {
                    }
                })

                // nested list with just some random string data
                .state('kills.killmail', {
                    templateUrl: require.toUrl('./kills/_killmail.html')
                })

        });

        return module;
    });
})();