(function() {
    'use strict';

    var moduleName = 'space-tools.kills',

        angularDependencies = [];

    define([
        'require',
        'angular'
    ], function(require, angular) {

        var module = angular.module(moduleName, angularDependencies);

        function LossesCtrl($scope, $http) {

            var loadKills = $http.get('https://zkillboard.com/api/losses/no-attackers/allianceID/1354830081/'),
                loadTypeNames = $http.get('app/assets/invTypeNames.json');

            loadKills.then(function(response) {
                var kills = response.data;
                this.kills = kills;
                console.log(kills);
            }.bind(this));

            loadTypeNames.then(function(response) {
                var typeNames = response.data;
                this.typeNames = typeNames;
                console.log(typeNames);
            }.bind(this));

        }

        console.log('i was loaded!');

        module.controller('LossesCtrl', ['$scope', '$http', LossesCtrl]);

        return module;
    });
})();
