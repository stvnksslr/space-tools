/**
 * Created by skessler on 12/14/2014.
 */

(function() {
    'use strict';
    var moduleName = 'space-tools.home',
        angularDependencies = ['ui.router'];
    define([
        'require',
        'angular'
    ], function(require, angular, uirouter) {
        var module = angular.module(moduleName, angularDependencies);

        return module;
    });
})();

