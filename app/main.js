require.config({
    paths: {
        'angular': '../bower_components/angular/angular'
        // 'lodash': '../bower_components/lodash/dist/lodash', // You should probably use lodash
        // 'angular.ui': '../bower_components/angular-ui/build/angular-ui', // You might want to use angular-ui
         'ui.router': '../bower_components/angular-ui-router/release/angular-ui-router',
        // 'angular-loading-bar': '../bower_components/angular-loading-bar/build/loading-bar', // This is :coal:
        // 'jquery': '../bower_components/jquery/dist/jquery', // Lets hope you dont need this
    },
    // 'Shims' are required for 3rd party libs that don't use some sort of AMD/CommonJS/UMD module definition
    shim: {
        'angular': {
            exports: 'angular'
            // deps: ['jquery'] // We don't need the features of jquery for now, but uncomment this if we do
        }
        // ,
        // 'angular-loading-bar': ['angular', 'ngAnimate'],
        // 'angular.ui': ['angular'],
         'ui.router': ['angular'],
    }
});

/* Dont touch this unless you really need to */
require(['angular', 'space-tools'], function() {
    console.log('Require Configured, Space Tools loaded, bootstrapping angular app');
    angular.bootstrap(document.querySelector('html'),['space-tools']);
});
