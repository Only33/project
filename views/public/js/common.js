    //
	//NProgress.start();
    //
	//NProgress.done();
    //
	//$('.navs ul').prev('a').on('click', function () {
	//	$(this).next().slideToggle();
	//});



    define(['jquery','cookie','template'],function($,cookie,template){
        if(!$.cookie('PHPSESSID')&&location.pathname!='/login'){
            ///views/dashboard/login
            location.href= '/login';
        }
        if(location.pathname!='/login'&&location.pathname!='/dashboard/login'&&location.pathname!='/views/dashboard/login'){
            //需要渲染模板
            var html = template('img_avatar',JSON.parse($.cookie('tcInfo')));
            $('.aside>.profile').html(html);
        }
        //退出功能
        $('#logout').on('click',function(){
            $.ajax({
                url:'/api/logout',
                type:'post',
                data:'',
                success:function(){
                    alert("退出成功");
                    location.href = '/login';
                }
            })
    });
        $('.navs a+ul').prev().on('click',function(){
            $(this).next().slideToggle();
        })

    });
