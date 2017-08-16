/**
 * Created by GD-se7en on 2017.8.15.
 */

define(['jquery','template'],function($,template){

    var search = location.search; // ?tc_id=3&name=250&age=20&sex='男'
    search = search.slice(1);
    var searchArr = search.split('&'); // 将字符串切割成数组
    console.log(searchArr);

    var o = {};
    for(var i=0; i<searchArr.length; i++){
        //得到数组中第一项，每一项都是一个字符串
        //然后以 = 再次进行切割
        var temp = searchArr[i].split('=');
        o[temp[0]] = temp[1];
    }

    //根据ID发送请求，然后渲染模板   把当前ID 下面的数据查询出来，渲染在当前的页面上
    $.ajax({
        url:'/api/teacher/edit',
        type:'get',
        data:{
            tc_id: o.tc_id
        },
        success:function(info){
            info.result.title = '讲师编辑';
                info.result.saveBtnText = '保存';
            if(info.code == 200){
                var htmlStr = template('tpl_tc_edit',info.result);
                $('.teacher').html(htmlStr)
            }

        }
    });
    
});


