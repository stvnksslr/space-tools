'use strict';
import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import * as fs from 'fs';

var pilotStats = angular.module('space-tools.km-tools.pilot-stats', ['ui.router']);

function PilotStatsCtrl($scope, $http, $q) {

    var loadAlliance = $http.get('https://zkillboard.com/api/losses/no-attackers/allianceID/1354830081/'),
        loadCorp = $http.get('https://zkillboard.com/api/losses/no-attackers/corporation/98342574/'),
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

// Register out PilotStatsCtrl
pilotStats.controller('PilotStatsCtrl', ['$scope', '$http', '$q', PilotStatsCtrl]);

// Define the states we want to expose for this submodule
pilotStats.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('km-tools.pilot-stats', {
        url: '/pilot-stats',
        template: require('./_pilot-stats.html'),
        controller: 'PilotStatsCtrl',
        controllerAs: 'PilotStats'
    });
}]);

export default pilotStats;
