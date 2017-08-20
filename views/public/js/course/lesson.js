/**
 * Created by GD-se7en on 2017.8.20.
 */

define(['utils','jquery','template','bootstrap','form'],function(utils,$,template,bootstrap){
    var cs_id = utils.queryString().cs_id;
    renderLesson();

    //当前课时页面的添加按钮注册事件
    $('.steps').on('click','#addLesson',function(){
        //显示模态框
        $('#lesson').modal();
    });

    //给保存按钮注册事件
    $('.btnSave').on('click',function(){
        var ct_is_free = Number($('input[name=ct_is_free]').prop('checked'));
        $('form').ajaxSubmit({
            url:'/api/course/chapter/add',
            type:'post',
            data:{
                ct_cs_id:cs_id,
                ct_is_free:ct_is_free
            },
            success:function(info){
                if(info.code == 200){
                    alert('添加成功，渲染当前页面');
                    renderLesson();
                    $('#lesson').modal('hide');
                }
            }
        })
    });


    //渲染模块部分封装
    function renderLesson(){
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
    }
});