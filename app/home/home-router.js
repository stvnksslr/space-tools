/**
 * Created by skessler on 12/14/2014.
 */

(function() {
    'use strict';

    var moduleName = 'space-tools.home-router',

        angularDependencies = ['ui.router'];

    define([
        'require',
        'angular',
        'ui.router'
    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        return module;
    });
})();
