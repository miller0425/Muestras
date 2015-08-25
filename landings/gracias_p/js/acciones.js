// JavaScript Document
//aciones independientes del sencha y el jquery
function MM_callJS(jsStr) { //v2.0
  return eval(jsStr)
}
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

var t=setInterval(function() {avanzar();},'8000');

function avanzar()
{
	var size = $('.slider').find('.s_element').size();
		$('.slider').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).fadeOut(1500);
					$(value).removeClass('s_visible');
					
					if(index+1<size)
					{
						$($('.slider').find('.s_element').get(index+1)).fadeIn(1500);
						$($('.slider').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider').find('.s_element').get(0)).fadeIn(1500);
						$($('.slider').find('.s_element').get(0)).addClass('s_visible');	
						return false;
					}
				}
		});
}