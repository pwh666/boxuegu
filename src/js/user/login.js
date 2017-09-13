var userinfo = JSON.parse(localStorage.getItem('userinfo')) || {};
var tc_avatar = userinfo.tc_avatar || '/public/img/default.png';
$('.avatar img').attr('src',tc_avatar);

$('#login-form').on('submit',function(e){
    $.ajax({
        url:'/v6/login',
        type:'post',
        data:$(this).serialize(),
        success:function(data){
            if(data.code == 200){
                alert('成功');
                localStorage.setItem('userinfo',JSON.stringify(data.result));
                location.href = '/dist';
            }else{
                alert('失败');
            }
        },
        error:function(){
            alert('失败');
        }
    });
    return false;
});