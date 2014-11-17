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
        console.log('another attempt at getting this working');

        return module;
    });
})();
    