/**
 * Created by GD-se7en on 2017.8.15.
 */

define(['jquery','template','datepicker','datepickerzh','form'],function($,template,dp,dpzh,form){

    var search = location.search; // ?tc_id=3&name=250&age=20&sex='男'
    search = search.slice(1);
    var searchArr = search.split('&'); // 将字符串切割成数组
    //console.log(searchArr);

    var o = {};
    for(var i=0; i<searchArr.length; i++){
        //得到数组中第一项，每一项都是一个字符串
        //然后以 = 再次进行切割
        var temp = searchArr[i].split('=');
        o[temp[0]] = temp[1];
    }
    if(o.tc_id){
        //根据ID发送请求，然后渲染模板   把当前ID 下面的数据查询出来，渲染在当前的页面上
        $.ajax({
            url:'/api/teacher/edit',
            type:'get',
            data:{
                tc_id: o.tc_id
            },
            success:function(info){
            if(info.code == 200){
                 info.result.title = '讲师编辑';
                 info.result.saveBtnText = '保存';
                 var htmlStr = template('tpl_tc_edit',info.result);
                 $('.teacher').html(htmlStr);

                //加载日期插件
                $('input[name=tc_join_date]').datepicker({
                    format:'yyyy-mm-dd',
                    language:'zh-CN'
                })
               }
            }
        });
        //给按钮注册事件，保存上面编辑完的数据，form表单
       ajaxSubmit('/api/teacher/update');
    }
    else{
        var htmlStr = template('tpl_tc_edit',{
            title:'讲师添加',
            saveBtnText:'添加',
            tc_gender:1
        });
        $('.teacher').html(htmlStr);

        //加载日期插件
        $('input[name=tc_join_date]').datepicker({
            format:'yyyy-mm-dd',
            language:'zh-CN'
        });

        //单击按钮，将表单中的数据提交给服务器，完成添加功能
        ajaxSubmit('/api/teacher/add');
    }


    // 封装一个按钮的功能
    function ajaxSubmit(url){
        $('.teacher').on('click','.btnSave',function(){
            //使用的是.ajaxSubmit()，这个请求的好处，是直接从表单获取数据，不用自己手动获取数据了
            $('form').ajaxSubmit({
                url:url,
                type: 'post',
                success:function(res){
                    alert("提交成功");
                    location.href = '/teacher/list'
                }
            });
            return false;
        })
    }
});







