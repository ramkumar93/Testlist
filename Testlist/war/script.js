$(document).ready(function(){
	
	$('.new-todo').keypress(function(e) {
	    if (e.keyCode == '13') {
	    	var value = $('.new-todo').val();
	    	
	    	var dest = value.replace(/\s/g, '');
	        alert(dest);
	        alert(value);
	       $(".todo-list").append("<li class='lists lists"+value+"'><div class='view view"+value+"'><input class='checkbox' type='checkbox'></input><label class="+value+">"+value+"</label><button class='destroy'>x</button></div><input type='text' class='edit edit"+value+"' value='"+value+"'></li>");
	       $(".edit").hide();
	      
	       $(".new-todo").val('');
	    }
	    //return false; 
	});
//	$("#btn1").click(function(){
//	$("#mytext").val("This is test field");
//	});
	$(".todo-list").on("dblclick", "label", function(){
//		var s = $(this).find("label").text();
		var s = $(this).text();
//		$(this).find('.destroy').remove();
//		$(this).find('.edit').css("display","inline-block");
		alert(s);
//		$(this).css("padding","0");
//		$(this).css("padding","0 0 0 50px");
//		$(this).find('input').css("border","1px solid");
		
//		var text = $(".lists").children("."+s).text();
//		$(".edit"+s).show();
		$(".edit"+s).show();$('.edit'+s).focus();
		$(".edit"+s).val(s);
		$(".view"+s).hide();
		$(".lists"+s).addClass("inputonedit");
//		alert(text);
	

		$('.edit').focusout(function(){
//			alert("asj");
			var value = $('.edit').val();
//			alert(value);
//			if(e.keyCode == '13')
//			{
			var data = $(this).val();
			alert(data);
//			$('.edit').hide();
			$("."+s).text(data);
//			$(".lists"+s).remove();
			$(".lists"+s).replaceWith("<li class='lists lists"+data+"'><div class='view view"+data+"'><input class='checkbox' type='checkbox'></input><label class="+data+">"+data+"</label><button class='destroy'>x</button></div><input type='text' class='edit edit"+data+"' value='"+data+"'></li>");
			$(".lists"+s).removeClass("inputonedit");
			$(".view"+data).show();
//			$(this).prev().show();
			
//			$(this).find(".edit").hide();
			$(".edit"+data).hide();
			//$('.edit').unbind('focusout');
			setTimeout(function(){$('.edit').unbind('focusout');}, 1);
			//setTimeout(function(){$('#submitcontent').unbind('click');}, 10);
			//}
		});
		
		//setTimeout(function(){$('.lists').unbind('dblckick');}, 10);
		//$(".lists").off("dblckick");
	});
	

	
	$(".todo-list").on("click","button",function(){
		$(this).parent().parent().remove();
	});
	
	
});
