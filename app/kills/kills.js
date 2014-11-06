(function() {
    'use strict';
    var moduleName = 'space-tools.kills',
        angularDependencies = [];
    define([
            'require',
            'angular',
             console.log('i was loaded!');
        ],
        function(require, angular) {
            var module = angular.module(moduleName, angularDependencies);
            return module;
        });
})();

var moduleName = 'space-tools.kills',
