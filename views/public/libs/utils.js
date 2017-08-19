/**
 * Created by GD-se7en on 2017.8.19.
 */

define(function(){

    var obj = {
        queryString:function(){
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
            return o; // 返回储存在  o 对象
        }
    };
    // 返回当前模块里面的对象
    return obj;
});
