(function() {
    'use strict';
    var moduleName = 'space-tools.kills.killmail',
        angularDependencies = ['ui.router'];
    define([
        'require',
        'angular'
    ], function(require, angular) {
        var module = angular.module(moduleName, angularDependencies);

        module.directive('killmail', function() {
            return {
                templateUrl: require.toUrl('./_killmail.html'),
                controller: function($scope) {
                    alert('controller');
                }
            }
        })
        return module;
    });
})();
