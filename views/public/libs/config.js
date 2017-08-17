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
        'form':'assets/jquery-form/jquery.form',
        'datepicker':'assets/bootstrap-datepicker/js/bootstrap-datepicker.min',
        'datepickerzh':'assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min'
    },
    shim:{
        bootstrap:{
            deps: ['jquery']
        },
        form:{
            deps:['jquery']
        },
        'datepickerzh':{
            deps:['jquery']
        }
    }
});
require(['common']);