(function() {
    'use strict';

    var moduleName = 'space-tools.kills',

        angularDependencies = ['ui.router, app.directives.helloWorld'];

    define([
        'require',
        'angular',
        'ui.router',
        'app.directives.helloWorld'
    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        function LossesCtrl($scope, $http, $q) {

            var loadKills = $http.get('https://zkillboard.com/api/losses/no-attackers/allianceID/1354830081/'),
                loadTypeNames = $http.get('app/assets/invTypeNames.json');

            // Using $q.all we can wait until all of the data is loaded before
            // setting it on this controller.
            // We wait untill all data is loaded so that the template doesn't render too early
            $q.all({
                loadKills: loadKills,
                loadTypeNames: loadTypeNames
            }).then(function(results) {

                var kills = results.loadKills.data,
                    typeNames = results.loadTypeNames.data;

                console.log(kills);
                console.log(typeNames);

                this.kills = kills;
                this.typeNames = typeNames;

            }.bind(this));

        }

        console.log('i was loaded!');

        module.controller('LossesCtrl', ['$scope', '$http', '$q', LossesCtrl]);

        return module;
    });
})();