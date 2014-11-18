(function() {
    'use strict';

    var moduleName = 'space-tools.kills',
        angularDependencies = ['ui.router', 'space-tools.kills.killmail'];

    define([
        'require',
        'angular',
        'ui.router',
        './kills',
        './killmail'
    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        var killsApp = angular.module('killsApp', ['ui.router']);



        killsApp.config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/kills');

            $stateProvider

                // HOME STATES AND NESTED VIEWS ========================================
                .state('kills', {
                    url: '/kills',
                    templateUrl: '_kills.html'
                })

                // nested list with custom controller
                .state('kills.pilotStats', {
                    url: '/pilotStats',
                    templateUrl: '_pilotStats.html',
                    controller: function($scope) {
                        $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
                    }
                })

                // nested list with just some random string data
                .state('home.paragraph', {
                    url: '/paragraph',
                    template: 'I could sure use a drink right now.'
                })

        });


        function LossesCtrl($scope, $http, $q) {

            var loadAlliance = $http.get('https://zkillboard.com/api/losses/no-attackers/allianceID/1354830081/'),
                loadPilot = $http.get('https://zkillboard.com/api/kills/characterID/1564471258/'),
                loadTypeNames = $http.get('app/assets/invTypeNames.json');

            // Using $q.all we can wait until all of the data is loaded before
            // setting it on this controller.
            // We wait untill all data is loaded so that the template doesn't render too early
            $q.all({
                loadAlliance: loadAlliance,
                loadPilot: loadPilot,
                loadTypeNames: loadTypeNames
            }).then(function(results) {

                var alliance = results.loadAlliance.data,
                    pilot = results.loadPilot.data,
                    typeNames = results.loadTypeNames.data;

                console.log(alliance);
                console.log(pilot);
                console.log(typeNames);

                this.alliance = alliance;
                this.pilot = pilot;
                this.typeNames = typeNames;

            }.bind(this));

        }

        console.log('i was loaded!');

        module.controller('LossesCtrl', ['$scope', '$http', '$q', LossesCtrl]);

        return module;
    });
})();
