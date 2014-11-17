angular.module('app.directives.helloWorld', {
  setup: function() {
    // setup for app.directives.helloWorld
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
