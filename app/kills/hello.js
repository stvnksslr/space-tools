(function() {
    'use strict';

    var moduleName = 'space-tools.helloWorld',

        angularDependencies = [];

    define([
        'require',
        'angular'
    ], function(require, angular) {

        var module = angular.module(moduleName, angularDependencies);
        console.log('another attempt at getting this working');

        return module;
    });
})();
    