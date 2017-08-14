/**
 * Created by GD-se7en on 2017.8.14.
 */
define(['jquery','cookie'],function($){
    //        submit()点击事件
    $('#formLogin').submit(function(e){
//            alert(333);
//            使用ajax请求数据
        var data = $(this).serializeArray();
        $.ajax({
            url:'/api/login',
            type:'post',
            data:data,
            success:function(result){
                alert("登录成功");
                $.cookie('tcInfo',JSON.stringify(result.result));
                location.href = '/';
            },
            error:function(errInfo){
                alert("用户名或者密码错误")
            }
        });
        return false;
    })
});
