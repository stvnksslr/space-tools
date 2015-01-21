'use strict';
import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import * as fs from 'fs';

var allianceStats = angular.module('space-tools.km-tools.alliance-stats', ['ui.router']);

function AllianceStatsCtrl($scope, $http, $q) {

    var loadAlliance = $http.get('https://zkillboard.com/api/losses/no-attackers/allianceID/1354830081/'),
        loadCorp = $http.get('https://zkillboard.com/api/losses/no-attackers/corporation/98342574/'),
        loadPilot = $http.get('https://zkillboard.com/api/kills/characterID/1564471258/'),
        loadTypeNames = $http.get('http://public-crest.eveonline.com/types/');

    // Using $q.all we can wait until all of the data is loaded before
    // setting it on this controller.
    // We wait untill all data is loaded so that the template doesn't render too early
    $q.all({
        loadAlliance: loadAlliance,
        loadCorp: loadCorp,
        loadPilot: loadPilot,
        loadTypeNames: loadTypeNames
    }).then(function(results) {

        var alliance = results.loadAlliance.data,
            corp = results.loadCorp.data,
            pilot = results.loadPilot.data,
            typeNames = results.loadTypeNames.data;

        console.log(alliance);
        console.log(corp);
        console.log(pilot);
        console.log(typeNames);

        this.alliance = alliance;
        this.corp = corp;
        this.pilot = pilot;
        this.typeNames = typeNames;

    }.bind(this));

}

// Register out CorpStatsCtrl
allianceStats.controller('AllianceStatsCtrl', ['$scope', '$http', '$q', AllianceStatsCtrl]);

// Define the states we want to expose for this submodule
allianceStats.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('km-tools.alliance-stats', {
        url: '/alliance-stats',
        template: require('./_alliance-stats.html'),
        controller: 'AllianceStatsCtrl',
        controllerAs: 'AllianceStats'
    });
}]);

export default allianceStats;
