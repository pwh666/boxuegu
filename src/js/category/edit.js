require('../common/header.js');
require('../common/aside.js');
var util = require('../common/util.js');

var cg_id = util.getSearch('cg_id');
$.get('/v6/category/edit',{cg_id:cg_id},function(data){
  $('.category-edit').html(template('category-edit-tpl',data.result));
});

$('#catetory-edit-form').ajaxForm({
  delegation:true,
  success:function(data){
    if(data.code == 200){
      alert('成功');
      location.href='/dist/html/category/list.html';
    }
  }
});
