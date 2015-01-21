'use strict';
import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import * as _ from 'lodash';
import * as fs from 'fs';

var pilotStats = angular.module('space-tools.km-tools.pilot-stats', ['ui.router']);

function PilotStatsCtrl($scope, $http, $q) {

    var loadPilot = $http.get('https://zkillboard.com/api/kills/characterID/1564471258/'),
        loadSystems = $http.get('http://public-crest.eveonline.com/industry/systems/'),
        loadTypeNames = $http.get('http://public-crest.eveonline.com/types/');

    // Using $q.all we can wait until all of the data is loaded before
    // setting it on this controller.
    // We wait untill all data is loaded so that the template doesn't render too early
    $q.all({
        loadPilot: loadPilot,
        loadSystems: loadSystems,
        loadTypeNames: loadTypeNames
    }).then(function(results) {

        var pilot = results.loadPilot.data,
            systems = results.loadSystems.data,
            typeNames = results.loadTypeNames.data;

        console.log(pilot);
        console.log(systems);
        console.log(typeNames);

        this.pilot = pilot;
        this.systems = _(systems).pluck('items').pluck('solarSystem').indexBy('id').value();
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
