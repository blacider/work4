function check() {
	var errorMsg = "";
	var nameMsg = $('#name').val();
	var passwordMsg = $('#password').val();
	if (nameMsg == "" && passwordMsg == "") {
		errorMsg = "用户名或密码错误";
	} else {
		dataAjax();
		$('#error').css('visibility', 'hidden');
		return false;
	}
	$('#error').text(errorMsg);
	$('#error').css('visibility', 'visible');
	return false;
}
function dataAjax() {
  $.ajax({
    type: "post",
    url: "#",
    data: $('form').serialize(),
    dataType:'jsonp',
    success: function(data) {
      if (data.status)
          ajaxSuccess();
      }
    });
  ajaxSuccess();
}
function ajaxError() {
	$('#error').text("加入失败");
	$('#error').css('visibility', 'visible');
}
$(document).ready(function() {
	/* Act on the event */
	$('.contain').css('height', String(document.body.scrollHeight));
});