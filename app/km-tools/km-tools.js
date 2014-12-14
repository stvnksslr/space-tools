/**
 * Created by skessler on 12/2/14.
 */

(function() {
    'use strict';

    var moduleName = 'space-tools.km-tools',
        angularDependencies = ['ui.router', 'space-tools.km-tools.pilotStats', 'space-tools.router'];

    define([
        'require',
        'angular',
        'ui.router',
        './pilotStats/pilotStats'
    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        function LossesCtrl($scope, $http, $q) {

            var loadAlliance = $http.get('https://zkillboard.com/api/losses/no-attackers/allianceID/1354830081/'),
                loadPilot = $http.get('https://zkillboard.com/api/kills/characterID/1564471258/'),
                loadTypeNames = $http.get('app/localAssets/invTypeNames.json');

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

        console.log('km-tools has loaded!');

        module.controller('LossesCtrl', ['$scope', '$http', '$q', LossesCtrl]);

        return module;
    });
})();
