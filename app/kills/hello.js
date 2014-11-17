angular.module('app.directives.helloWorld', {
    define([
        'require',
        'angular',
        'ui.router',
        'app.directives.helloWorld'
    ], setup: function(require, angular, uirouter) {    // setup for app.directives.helloWorld
    return {
    	restrict: 'E',
    	controller: function(){
    	    console.log('hopefully this is working');
    	}
    }
  },
  teardown: function() {
    //teardown for app.directives.helloWorld
  }
});
