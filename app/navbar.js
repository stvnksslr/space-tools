/**
 * Created by skessler on 12/2/14.
 */
import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import * as angularBootstrap from 'angular-bootstrap';

var spaceToolsNavbar = angular.module(moduleName, ['ui.router', 'ui.bootstrap']);

function NavBarCtrl($scope) {
    $scope.isCollapsed = true;
}

spaceToolsNavbar.controller('navProcessing', ['$scope', '$http', '$q', NavBarCtrl]);

export default spaceToolsNavbar;
