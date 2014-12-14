/**
 * Created by skessler on 12/1/14.
 */

(function() {
    'use strict';

    var moduleName = 'space-tools.kmtools-router',

        angularDependencies = ['ui.router','space-tools.km-tools.pilotStats'];

    define([
        'require',
        'angular',
        'ui.router',
        './km-tools/pilotStats/pilotStats'
    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        return module;
    });
})();