/**
 * Created by GD-se7en on 2017.8.21.
 */


define(['jquery','template'],function ($,template){
    //������ ��ȡ���ݣ���Ⱦģ��
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