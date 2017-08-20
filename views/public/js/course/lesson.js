/**
 * Created by GD-se7en on 2017.8.20.
 */

define(['utils','jquery','template','bootstrap'],function(utils,$,template,bootstrap){
    var cs_id = utils.queryString().cs_id;
    $.ajax({
        url:'/api/course/lesson',
        type:'get',
        data:{
            cs_id:cs_id
        },
        success:function(info){
            if(info.code == 200){
               var htmlStr = template('tpl_cs_lesson',info.result);
                $('.steps').html(htmlStr)
            }
        }
    });

    //当前课时页面
    $('.steps').on('click','#addLesson',function(){
        //显示模态框
        $('.lessons').modal();
    });


});