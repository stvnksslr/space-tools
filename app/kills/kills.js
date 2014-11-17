(function() {
    'use strict';

    var moduleName = 'space-tools.kills',

        angularDependencies = ['ui.router', 'space-tools.kills.killmail'];

    define([
        'require',
        'angular',
        'ui.router',
        './killmail'
    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        function LossesCtrl($scope, $http, $q) {

            var loadKills = $http.get('https://zkillboard.com/api/losses/no-attackers/allianceID/1354830081/'),
                loadPilot = $http.get('https://zkillboard.com/api/kills/characterID/1564471258/'),
                loadTypeNames = $http.get('app/assets/invTypeNames.json');

            // Using $q.all we can wait until all of the data is loaded before
            // setting it on this controller.
            // We wait untill all data is loaded so that the template doesn't render too early
            $q.all({
                loadKills: loadKills,
                loadPilot: loadPilot,
                loadTypeNames: loadTypeNames
            }).then(function(results) {

                var kills = results.loadKills.data,
                    pilot = results.loadPilot.data,
                    typeNames = results.loadTypeNames.data;

                console.log(kills);
                console.log(pilot);
                console.log(typeNames);

                this.kills = kills;
                this.pilot = pilot;
                this.typeNames = typeNames;

            }.bind(this));

        }

        console.log('i was loaded!');

        module.controller('LossesCtrl', ['$scope', '$http', '$q', LossesCtrl]);

        return module;
    });
})();
