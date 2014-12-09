/**
 * Created by skessler on 12/2/14.
 */

(function() {
    'use strict';

    var moduleName = 'space-tools.navbar',

        angularDependencies = ['ui.router','ui.bootstrap'];

    define([
        'require',
        'angular',
        'ui.router',
        'ui.bootstrap'
    ], function(require, angular, uirouter, uiboostrap) {

        var module = angular.module(moduleName, angularDependencies);

        module.controller('MainCtrl', function($scope) {
            $scope.name = 'World';
        });

        module.controller('DropdownCtrl', function($scope) {

            $scope.items = [
                "The first choice!",
                "And another choice for you.",
                "but wait! A third!"
            ];
        });

        module.controller('navProcessing', ['$scope', '$http', '$q']);
        console.log('Nav Bar Loaded');
        return module;
    });
})();