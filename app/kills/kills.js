(function() {
    'use strict';
    var moduleName = 'space-tools.kills',
        angularDependencies = [];
    define([
            'require',
            'angular'
        ],
        function(require, angular) {
            var module = angular.module(moduleName, angularDependencies);
            console.log('i was loaded!');
            return module;
        });
})();

        function LossesCtrl($scope, $http) {
        	
           this.someValue  = 'Some Value!';

           // variable does an ajax request on the zkillboard page
           var loadKills = $http.get('https://zkillboard.com/api/losses/no-attackers/allianceID/1354830081/');

           // loads kills into parsable format outputs it to the logs
           loadKills.then(function(response){
               var kills = response.data;
               console.log(kills);
           });

        }

        module.controller('LossesCtrl', ['$scope', '$http', LossesCtrl]);