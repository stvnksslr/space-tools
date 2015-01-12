/**
 * Created by skessler on 12/11/14.
 */

(function() {
    'use strict';

    var moduleName = 'space-tools',
        angularDependencies = ['space-tools.router'];

    define([
        'require',
        'angular',
        './router'
    ], function(require, angular) {
        var module = angular.module(moduleName, angularDependencies);
        module.controller('MyController', ['$scope']);
        return module;
    });
})();
