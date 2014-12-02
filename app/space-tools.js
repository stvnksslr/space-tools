(function() {
    'use strict';

    var moduleName = 'space-tools',
        angularDependencies = ['space-tools.kills','space-tools.router'];

    define([
        'require',
        'angular',
        './kills/kills',
        './router'
    ], function(require, angular) {

        var module = angular.module(moduleName, angularDependencies);


        function MyController($scope) {
            // Dont really need $scope for anything yet
            this.someValue = 'Some Value!';
        }

        MyController.prototype.clearValue = function() {
            this.someValue = '';
        };

        module.controller('MyController', ['$scope', MyController]);

        return module;
    });
})();
