/**
 * Created by skessler on 12/11/14.
 */


(function() {
    'use strict';

    var moduleName = 'space-tools.router',

        angularDependencies = ['ui.router','space-tools.navbar','space-tools.kmTools-router'];

    define([
        'require',
        'angular',
        'ui.router',
        '../navbar',
        './km-tools/kmTools-router'
    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        module.config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider

                // HOME STATES AND NESTED VIEWS ========================================
                .state('home', {
                    url: '/home',
                    templateUrl: require.toUrl('./home/_home.html')
                })

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