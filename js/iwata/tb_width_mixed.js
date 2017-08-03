function TB_position() {

    setTimeout(function() {
						
    	if (TB_WIDTH>=480) {
        	$("#TB_header").css({width:TB_WIDTH+"px", background: "transparent url(images/tb_header_bg_480.jpg) repeat-x scroll left top"});
    	} else if (TB_WIDTH>=400) {
        	$("#TB_header").css({width:TB_WIDTH+"px", background: "transparent url(images/tb_header_bg_480.jpg) repeat-x scroll left top"});
		} else {
        	$("#TB_header").css({width:TB_WIDTH+"px", background: "transparent url(images/tb_header_bg_400.gif) repeat-x scroll left top", margin: "0px 0px 1px 0px", height:"20px"});
            
    	}
    }, 1000);

	var pagesize = getPageSize();
  
  	if (window.innerHeight && window.scrollMaxY) {	
		yScroll = window.innerHeight + window.scrollMaxY;
	} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
		yScroll = document.body.scrollHeight;
	} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
		yScroll = document.body.offsetHeight;
  	}
	
	var arrayPageScroll = getPageScrollTop();
	$("#TB_window").css({width:TB_WIDTH+"px",height:TB_HEIGHT+"px",
	left: ((pagesize[0] - TB_WIDTH)/2)+"px", top: (arrayPageScroll[1] + ((pagesize[1]-TB_HEIGHT)/2))+"px" });
	$("#TB_overlay").css("height",yScroll +"px");
	$("#TB_background").css({width:(TB_WIDTH+14)+"px",height:319+"px", left:((pagesize[0]-TB_WIDTH)/2)+"px", top: (arrayPageScroll[1] + ((pagesize[1]-TB_HEIGHT)/2))+"px"});
	
}