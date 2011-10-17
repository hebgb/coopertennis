$(function() {
	var imgs = ['tennis-0','tennis-1','tennis-2'];
	
	function preload(arr) {
	    $(arr).each(function(){
	        $('<img/>').attr({'id': this, 'src': 'images/'+this+'.jpg'}).css({'display':'none', 'position':'absolute'}).appendTo('#photos');
	    });
	}
	
	preload(imgs);
	
	var i = 0;
	var prev;
	
	changeSrc = function(i) {
		$('#tennis-'+i).fadeIn();
		$('#tennis-'+prev).fadeOut();
	}
	
	rotateImg = function() {
		clearInterval(window.t);
		window.t=setInterval("rotateImg()", 5000);
		changeSrc(i);
		prev = i;
		i++;
		if (i == imgs.length)
			i = 0;
	}
	
	rotateImg();
	
});