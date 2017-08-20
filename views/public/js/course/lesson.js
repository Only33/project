/**
 * Created by GD-se7en on 2017.8.20.
 */

define(['utils','jquery','template','bootstrap','form'],function(utils,$,template,bootstrap){
    var cs_id = utils.queryString().cs_id;
    renderLesson();

    //当前课时页面的添加按钮注册事件
    $('.steps').on('click','#addLesson',function(){
        var obj = {
            title:'课程添加',
            saveTextBtn:'添加',
            actionUrl:'/api/course/chapter/add'
        };
        var htmlStr = template('tpl_cs_modal',obj);
        $('#tpl_modal').html(htmlStr);

        //显示模态框
        $('#lesson').modal();
    });

    //给保存按钮注册事件
    //$('.btnSave').on('click',function(){  使用事件委托绑定事件，因为按钮是通过模态框渲染
    $('#tpl_modal').on('click','.btnSave', function () {
        var ct_is_free = Number($('input[name=ct_is_free]').prop('checked'));
        $('form').ajaxSubmit({
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

    // 编辑按钮注册事件，在模态框上显示所有信息内容
    $('.steps').on('click', '#btnEdit', function () {
        $.ajax({
            url: '/api/course/chapter/edit',
            type: 'get',
            data: {
                ct_id: $(this).parent().attr('data-id')
            },
            success: function (info) {
                if(info.code==200){
                    info.result.title = '编辑课时';
                    info.result.saveTextBtn = '保 存';
                    info.result.actionUrl = '/api/course/chapter/modify';
                    var htmlStr = template('tpl_cs_modal',info.result);
                    $('#tpl_modal').html(htmlStr);

                    $('#lesson').modal();
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