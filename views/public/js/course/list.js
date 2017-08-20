/**
 * Created by GD-se7en on 2017.8.21.
 */


define(['jquery','template'],function ($,template){
    //发请求 获取数据，渲染模板
    $.ajax({
        url:'/api/course',
        type:'get',
        success:function (info){
            if(info.code == 200){
                var htmlStr = template('tpl_cs_list',info);
                $('.courses').html(htmlStr);
            }
        }
    })
})