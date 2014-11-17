(function() {
    'use strict';
    var moduleName = 'space-tools.kills.displayKills',
        angularDependencies = ['ui.router'];
    define([
        'require',
        'angular'
    ], function(require, angular) {
        var module = angular.module(moduleName, angularDependencies);

        module.directive('helloWorld', function() {
            return {
                templateUrl: require.toUrl('./_displayKills.html'),
                controller: function($scope) {
                    alert('controller');
                }
            }
        })
        return module;
    });
})();
