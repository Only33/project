/**
 * Created by GD-se7en on 2017.8.19.
 */
define(['utils','jquery','template'],function(utils,$,template){
    //��ȡurl��id
    var cs_id = utils.queryString().cs_id;
    //�������󣬻�ȡ����
    $.ajax({
        url:'/api/course/picture',
        type:'get',
        data:{
            cs_id:cs_id
        },
        //��������
        success:function(info){
            if(info.code == 200){
                //��Ⱦģ��
                var htmlStr = template('tpl_cs_pic',info.result);
                $('.steps').html(htmlStr);

                //�ϴ�ͼƬ
                
            }
        }
    });


});