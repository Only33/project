/**
 * Created by GD-se7en on 2017.8.15.
 */
define(['jquery','template','bootstrap'],function($,template){
    $.ajax({
        url:'/api/teacher',
        type:'get',
        success:function(data){
            if(data.code == 200){
                var html = template('tpl_tc_list',data);
                $('#tc_list').html(html);
               console.log(html)
            }
        }
    });

    //查看讲师管理信息
    $('#tc_list').on('click','a.check-info',function(){
        var id = $(this).parent().attr('data-id');
        $.ajax({
            url:'/api/teacher/view',
            type:'get',
            data:{
                tc_id:id
            },
            success:function(res){
                if(res.code == 200){
                    var htmlSrt = template('tc_info_tpl',res.result);
                    $('#teacherModal tbody').html(htmlSrt);
                    $('#teacherModal').modal(); //让模态框弹出来
                }
            }
        })
    });


    //按钮的注销和启用功能
    $('#tc_list').on('click','a.btnHandle',function(){
        //把对象存储起来
        var _this = $(this);
        $.ajax({
            url:'/api/teacher/handle',
            type:'post',
            data:{
                tc_id:$(this).parent().attr('data-id'),
                tc_status:$(this).attr('data-status')
            },
            success:function(res){
                if(res.code == 200){
                    if(res.result.tc_status == 1){
                        _this.text('启用');
                    }
                    else{
                        _this.text('注销');
                    }
                    //将返回来的状态值，重新赋值给按钮的data-status属性
                    _this.attr('data-status',res.result.tc_status);
                }
            }
        })
    });
});




