/**
 * Created by GD-se7en on 2017.8.19.
 */


define(['utils','jquery','template','uploadify','Jcrop'],function(utils,$,template,uploadify){
    //获取url的id
    var cs_id = utils.queryString().cs_id;
    var Jcrop_api = null;
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
                        $('#btnSelect').prop('disabled',false);


                        //开启裁切按钮
                        //$('#btnJcrop').on('click',function(){
                        //    $('.preview img').Jcrop({
                        //        aspectRatio:2,
                        //        setSelect:[60,60,200,100],
                        //        boxWidth:300
                        //    })
                        //})
                    }
                })
            }
        }
    }); //ajax

    //开启裁切按钮，裁切图片，保存裁切图片部分
    $('.steps').on('click','#btnJcrop',function(){
        if(!$(this).attr('data-status')){
            $(this).attr('data-status',333).text("保存");
            $('.preview img').Jcrop({
                aspectRatio:2,
                setSelect:[60,60,200,100],
                boxWidth:300
            },function(){
                Jcrop_api = this;
                this.initComponent('Thumbnailer',{width:220,height:100});
                $('.thumb').append($('.jcrop-thumb'));
            })
        }
        else{ // 上面的按钮是保存的功能

            //这里 result 是一个对象
            var result = Jcrop_api.getSelection();
            $.ajax({
                url:'/api/course/update/picture',
                type:'post',
                data:{
                    cs_id:cs_id,
                    x:result.x,
                    y:result.y,
                    h:result.h,
                    w:result.w
                },
                success:function(info){
                    if(info.code == 200){
                        alert("保存成功");
                        location.href = '/course/lesson?cs_id='+info.result.cs_id;
                    }
                }
            })
        }
    })
});