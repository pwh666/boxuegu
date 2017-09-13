require('../common/header.js');
require('../common/aside.js');

$.get('/v6/category/top',function(data){
  if(data.code == 200){
    $('#category-top-select').html(template('select-tpl',data.result));
  }
});

$('#category-add-form').ajaxForm(function(data){
  if(data.code == 200){
    alert('成功添加新学科');
    location.href = '/dist/html/category/list.html';
  }
});