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

        function navProcessing($scope, $http, $q) {

            $scope.items = [
                'The first choice!',
                'And another choice for you.',
                'but wait! A third!'
            ];

            $scope.status = {
                isopen: false
            };

            $scope.toggled = function(open) {
                $log.log('Dropdown is now: ', open);
            };

            $scope.toggleDropdown = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.status.isopen = !$scope.status.isopen;
            };

        }

        module.controller('navProcessing', ['$scope', '$http', '$q', navProcessing]);
        console.log('Nav Bar Loaded');
        return module;
    });
})();