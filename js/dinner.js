
$(document).ready(function () {
	$("div.signIn1").click(function () {
		setTimeout(function(){
		var date = new Date();
		var weekday = date.getDay();
		if((weekday == 0) || (weekday == 5) || (weekday == 6))
		{
			return;
		}
		if (weekday == 1)
		{
			var time = date.getTime();
			time = time - 4*24*60*60*1000;
			date.setTime(time);
		}
		else
		{
			var time = date.getTime();
			time = time - 24*60*60*1000;
			date.setTime(time);
		}
		var dateJson = date.toJSON();
		var time = "<td>"+dateJson.substr(0, 10)+"</td>";//"<td>2017-03-21</td>";
		$.ajax({
			url: '../../ZuLongFlowModule.Web/Ajax/OvertimeMeal.aspx',
			data: '<root><Data><Module>Receive</Module><Date>' + time + '</Date></Data></root>',
			type: "post",
			async: 'false',
			dataType: 'json',
			success: function (data){
				if (data.Status == "ok") {
					alert("申请成功");
                    ajaxData();
				}
				else
				{
					alert("申请失败");
				}
            },
			error: function ()
			{
				alert("申请失败")
			}
        })
	}, 2000);
	});
})
