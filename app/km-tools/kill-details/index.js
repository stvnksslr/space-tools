'use strict';

import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import * as _ from 'lodash';



var killDetails = angular.module('space-tools.km-tools.kill-details', ['ui.router']);


function KillDetailsCtrl($scope, $http, $q, $stateParams) {

    var killID = $stateParams.killID,
        loadKills = $http.get(`https://zkillboard.com/api/killID/${killID}/`),
        loadTypeNames = $http.get('http://public-crest.eveonline.com/market/prices/');

    $q.all({
        kills: loadKills,
        loadTypeNames: loadTypeNames

    }).then(function(results) {

        this.kill = results.kills.data[0]; // the killmail is the 0th item in the response array
        var typeNames = results.loadTypeNames.data;

        console.log(typeNames);

        this.typeNames = typeNames;

    }.bind(this));

}

killDetails.controller('KillDetailsCtrl', ['$scope', '$http', '$q', '$stateParams', KillDetailsCtrl]);

killDetails.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('km-tools.kill-details', {
        url: '/kill-details/:killID',
        template: require('./_kill-details.html'),
        controller: 'KillDetailsCtrl',
        controllerAs: 'KillDetails'
    });
}]);

export default killDetails;
