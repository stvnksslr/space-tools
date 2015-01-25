'use strict';

import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';

var killDetails = angular.module('space-tools.km-tools.kill-details', ['ui.router']);


function KillDetailsCtrl($scope, $http, $q) {

    var loadPilot = $http.get('https://zkillboard.com/api/kills/characterID/1564471258/'),
        loadTypeNames = $http.get('http://public-crest.eveonline.com/types/');

    // Using $q.all we can wait until all of the data is loaded before
    // setting it on this controller.
    // We wait untill all data is loaded so that the template doesn't render too early
    $q.all({
        loadPilot: loadPilot,
        loadTypeNames: loadTypeNames
    }).then(function(results) {

        var pilot = results.loadPilot.data,
            typeNames = results.loadTypeNames.data;

        console.log(pilot);
        console.log(typeNames);

        this.pilot = pilot;
        this.typeNames = typeNames;

    }.bind(this));

}

killDetails.controller('KillDetailsCtrl', ['$scope', '$http', '$q', KillDetailsCtrl]);

killDetails.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('km-tools.kill-details', {
        url: '/kill-details/:killmailID',
        template: require('./_kill-details.html'),
        controller: 'KillDetailsCtrl',
        controllerAs: 'KillDetails'
    });
}]);
export default killDetails;
