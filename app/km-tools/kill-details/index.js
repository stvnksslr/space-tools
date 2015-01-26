'use strict';

import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';


var killDetails = angular.module('space-tools.km-tools.kill-details', ['ui.router']);


function KillDetailsCtrl($scope, $http, $q, $stateParams) {

    var killID = $http.get('http://some.zkillboard.api/ <http://public-crest.eveonline.com/types/>' + $stateParams.killID);


    $q.all({

    }).then(function(results) {

    }.bind(this));

}

killDetails.controller('KillDetailsCtrl', ['$scope', '$http', '$q', '$stateParams', KillDetailsCtrl]);

killDetails.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('km-tools.kill-details', {
        url: '/kill-details/:killID',
        template: require('./_kill-details.html'),
        controller: 'KillDetailsCtrl',
        controllerAs: 'KillDetails'
    });
}]);
export default killDetails;
