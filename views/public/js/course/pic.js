/**
 * Created by GD-se7en on 2017.8.19.
 */
define(['utils','jquery','template'],function(utils,$,template){
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

                //上传图片
                
            }
        }
    });


});