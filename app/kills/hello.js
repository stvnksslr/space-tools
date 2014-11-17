(function() {
    'use strict';

    var moduleName = 'space-tools.kills.helloWorld',

        angularDependencies = ['ui.router'];

    define([
        'require',
        'angular',
        'uirouter'
    ], function(require, angular) {
        var module = angular.module(moduleName, angularDependencies);

        .directive('helloWorld', function) {
            return {
                controller: function($scope) {
                    alert('controller');
                }
            }
        }
        return module;
    });
})();
