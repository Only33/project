/**
 * Created by GD-se7en on 2017.8.15.
 */

require.config({
    baseUrl:'/views/public',
    paths: {
        'jquery': 'assets/jquery/jquery.min',
        'bootstrap': 'assets/bootstrap/js/bootstrap.min',
        'cookie': 'assets/jquery-cookie/jquery.cookie',
        'template': 'assets/artTemplate/template',
        'nprogress': 'assets/nprogress/nprogress',
        'common': 'js/common',
    },
    shim:{
        bootstrap:{
            deps: ['jquery']
        }
    }
});
require(['common']);