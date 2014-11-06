(function() {
    'use strict';
    var moduleName = 'space-tools.kills',
        angularDependencies = [];
    define([
            'require',
            'angular'
        ],
        function(require, angular) {
            var module = angular.module(moduleName, angularDependencies);
            console.log('i was loaded!');
            return module;
        });
})();

var moduleName = 'space-tools.kills',
