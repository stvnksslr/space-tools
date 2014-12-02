(function() {
    'use strict';
    var moduleName = 'space-tools.kills.pilotStats',
        angularDependencies = ['ui.router'];
    define([
        'require',
        '../../../bower_components/angular/angular'
    ], function(require, angular) {
        var module = angular.module(moduleName, angularDependencies);

        module.directive('pilotStats', function() {
            return {
                templateUrl: require.toUrl('./_pilotStats.html'),
                controller: function($scope) {
                    this.pilot;
                }
            }
        })
        return module;
    });
})();
