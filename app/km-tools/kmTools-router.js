/**
 * Created by skessler on 12/1/14.
 */

(function() {
    'use strict';

    var moduleName = 'space-tools.kmTools-router',

        angularDependencies = ['ui.router', 'space-tools.km-tools.pilotStats', 'space-tools.kmTools-router'];

    define([
        'require',
        'angular',
        'ui.router',
        '/km-tools',
        './pilotStats/pilotStats'

    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        module.config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');
            $stateProvider

                .state('km-tools', {
                    abstract: true,
                    url: '/km-tools',

                    // Note: abstract still needs a ui-view for its children to populate.
                    // You can simply add it inline here.
                    template: '<ui-view/>'
                })

                .state('km-tools.pilotStats', {
                    url: '/pilotStats',
                    templateUrl: require.toUrl('./pilotStats/_pilotStats.html'),
                    controller: 'LossesCtrl',
                    controllerAs: 'Losses'
                })
        });

        return module;
    });
})();

