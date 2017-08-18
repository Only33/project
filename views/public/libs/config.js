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
        'form':'assets/jquery-form/jquery.form',
        'datepicker':'assets/bootstrap-datepicker/js/bootstrap-datepicker',
        'datepickerzh':'assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        'uploadify':'assets/uploadify/jquery.uploadify',
        'region':'assets/jquery-region/jquery.region',
        'ckeditor':'assets/ckeditor/ckeditor',
        'common': 'js/common',
    },
    shim:{
        bootstrap:{
            deps: ['jquery']
        },
        'datepickerzh':{
            deps:['jquery']
        },
        form:{
            deps:['jquery']
        },
        uploadify:{
            deps:['jquery']
        },
        ckeditor:{
            exports:'CKEDITOR'
        }
    }
});
require(['common']);