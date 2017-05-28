$(function () {
	// 校园风光轮播
	window.onload=function(){
		$('.carousel').carousel();
	};

	// 轮播
	 $(function(){
		 var i=0;
	  var timer=null;
	  
	  // 下一个按钮
	  $('.intro_btn_right').click(function(){
	  	clearInterval(timer);
	   i++;
	   if (i==$('.slides li').length-2) {
	    i=1; //这里不是i=0
	    $('.slides').css({left:0}); //保证无缝轮播，设置left值
	   };
	  
	   $('.slides').stop().animate({left:-i*parseInt($('.slides li').css('width'))},600);
	   console.log($('.slides li').css('width'))
	   autoplay();
	  });
	  	

	  // 上一个按钮
	  $('.intro_btn_left').click(function(){
	  	clearInterval(timer);
	   i--;
	   if (i==$('.slides li').length-2) {
	    i=1; //这里不是i=0
	    $('.slides').css({left:0}); //保证无缝轮播，设置left值
	   };
	   $('.slides').stop().animate({left:-i*parseInt($('.slides li').css('width'))},600);
	   autoplay();
	  });
	  
	  
	  
	  //定时器自动播放
	  autoplay();
	  function autoplay(){
	  	timer=setInterval(function(){
	     i++;

	    if (i==$('.slides li').length-2) {
	    i=1;
	    $('.slides').css({left:0});
	   };

	   $('.slides').stop().animate({left:-i*parseInt($('.slides li').css('width'))},600);
	  },2000);
	  	}

	  //鼠标移入，暂停自动播放，移出，开始自动播放
	  $('.scroll_img').hover(function(){ 
	   clearInterval(timer);
	  },function(){
	   timer=setInterval(function(){
	   i++;
	   if (i==$('.slides li').length-2) {
	    i=1;
	    $('.slides').css({left:0});
	   };
	  
	   $('.slides').stop().animate({left:-i*parseInt($('.slides li').css('width'))},600);
	   
	  },2000)
	  })
	  
	 })
	
});