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
            //��Ҫ��Ⱦģ��
            var html = template('img_avatar',JSON.parse($.cookie('tcInfo')));
            $('.aside>.profile').html(html);
        }
        //�˳�����
        $('#logout').on('click',function(){
            $.ajax({
                url:'/api/logout',
                type:'post',
                data:'',
                success:function(){
                    alert("�˳��ɹ�");
                    location.href = '/login';
                }
            })
    });

    });
