/**
 * Created by GD-se7en on 2017.8.19.
 */
define(['utils','jquery','template','uploadify'],function(utils,$,template,uploadify){
    //获取url的id
    var cs_id = utils.queryString().cs_id;
    //发送请求，获取数据
    $.ajax({
        url:'/api/course/picture',
        type:'get',
        data:{
            cs_id:cs_id
        },
        //接收数据
        success:function(info){
            if(info.code == 200){
                //渲染模板
                var htmlStr = template('tpl_cs_pic',info.result);
                $('.steps').html(htmlStr);

                //上传图片功能
                $('#btnSelect').uploadify({
                    swf:'/views/public/assets/uploadify/uploadify.swf',
                    //上传的接口
                    uploader:'/api/uploader/cover',
                    fileObjName:'cs_cover_original',
                    formData:{
                        cs_id:cs_id
                    },
                    buttonText:'选择图片',
                    buttonClass:'btn btn-success btn-sm',
                    width:'80',
                    height:'auto',
                    itemTemplate:'<span></span>',
                    onUploadSuccess:function(file,data,response){
                        var path = JSON.parse(data).result.path;
                       $('.preview img').attr('src',path);

                        //开启切图按钮
                        $('#btnJcrop').prop('disabled',false);
                    }
                })
            }
        }
    });


});