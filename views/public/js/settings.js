/**
 * Created by GD-se7en on 2017.8.18.
 */

define(['jquery','template','uploadify','datepicker','datepickerzh','region','ckeditor','form'],function($,template,uploadify,datepicker,datezh,region,CKEDITOR){
//发送请求 获取数据 渲染页面
    $.ajax({
        url:'/api/teacher/profile',
        type:'get',
        success:function(info){
            if(info.code == 200) {
                var htmlStr = template('tpl_tc_profile', info.result);
                $('.settings').html(htmlStr);

                //加载图片上传插件
                $('#upfile').uploadify({
                    'swf': '/views/public/assets/uploadify/uploadify.swf',
                    'uploader': '/api/uploader/avatar', // 提交的接口
                    'width': 120,
                    'height': 120,
                    'buttonText': '',
                    'fileObjName': 'tc_avatar', // 上传到服务器的文件名，也就是当前input标签的name属性
                    onUploadSuccess: function (file,data,response) {
                        //attr()获取图片的属性，通过JSON.parse 将字符串转换成 对象
                        $('.preview img').attr('src', JSON.parse(data).result.path);
                    }
                });

                //使用日期插件
                $('input[name=tc_join_date],input[name=tc_birthday]').datepicker({
                    format:'yyyy/mm/dd',
                    language:'zh-CN'
                });

                //三级联动模块插件的使用
                $('#region').region({
                    url:'/views/public/assets/jquery-region/region.json' // 配置数据信息
                });

                // 富文本编辑器的使用
                CKEDITOR.replace('tc_introduce',{
                    toolbarGroups:[
                        { name:'clipboard', groups:['clipboard','undo']},
                        { name:'editing',   groups:['find','selection','spellchecker']},
                        { name:'links'},
                        { name:'insert'},
                        { name:'forms'},
                        { name:'tools'},
                        { name:'document',   groups:['mode','document','doctools']}
                    ]
                })
            }
        }
    });

    //给保存按钮注册事件，向服务器发送数据，提交当前的信息
    $('.settings').on('click','.saveBtn',function(){
        //alert(333)
        $('#tc_introduce').val(CKEDITOR.instances.tc_introduce.getData());
        $('form').ajaxSubmit({
            url:'/api/teacher/modify',
            type:'post',
            success:function(info){
                if(info.code == 200){
                    alert("添加成功");
                    location.href = '/teacher/list';
                }
            }
        });
        return false;
    })


});