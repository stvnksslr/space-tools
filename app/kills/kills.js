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

            var loadKills = $http.get('https://zkillboard.com/api/losses/no-attackers/allianceID/1354830081/');

            loadKills.then(function(response) {
                var kills = response.data;
                this.kills = kills;
                console.log(kills);
            }.bind(this));

        }

        console.log('i was loaded!');

        module.controller('LossesCtrl', ['$scope', '$http', LossesCtrl]);

        return module;
    });
})();
