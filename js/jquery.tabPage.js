/*
 * jQuery tabPage plug-in
 * http://www.dasheng.com/
 *
 * Copyright (c) 2010-2012
 * Author: Dasheng
 *
 * Date: 2010-04-12
 * Revision: 0.01
 */
(function($){
	$.fn.tabPage=function(setting){
		return this.each(function(){
			
			//分析参数并设定默认值
			var way		="mouse";	//切换方式:chick|mouse 默认值:mouse
			var speed	=100;		//响应速度:(毫秒数) 默认值:100
			var auto	=false;		//自动切换:true|false 默认值:false
			var delay	=3;			//自切延时:(秒) 默认值:3
			
			if(!(typeof(setting)=="undefined")){
				if(!(typeof(setting.way)=="undefined")) way=setting.way;
				if(!(typeof(setting.speed)=="undefined")) speed=setting.speed;
				if(!(typeof(setting.auto)=="undefined")) auto=setting.auto;
				if(!(typeof(setting.delay)=="undefined")) delay=setting.delay;
			}

			var timeoutId=null;
			var intervalId=null;
			var $this=$(this);
			var $li=$(this).children("ul").children("li");
			
			if(way=="click"){
				//点击标签
				$li.click(function(){
					setFocus($(this));
					return false;
				});
			}else{
				//鼠标悬停
				$li.mouseover(function(){
					var liNode=$(this);
					timeoutId=setTimeout(function(){
							setFocus(liNode);
						},100);
				}).mouseout(function(){
					clearTimeout(timeoutId);
				});
			}
			
			//自动播放
			function autoPlay(){
				var $liNext=$li.filter(".tabin").next("li");
				if($liNext.length<=0) $liNext=$li.eq(0);
				setFocus($liNext);
			}
			
			//切换页
			function setFocus(obj){
				var index=$("li").index(obj);
				var $div=$this.children("div").eq(index);
				$div.addClass("contentin").siblings("div").removeClass("contentin");
				obj.addClass("tabin").siblings("li").removeClass("tabin");
			}
			
			//添加定时器
			if(auto){
				intervalId=setInterval(function(){
					autoPlay();
				},1000*delay);
				
				//鼠标悬浮,清除定时器
				$this.hover(function(){
					clearInterval(intervalId);
				},function(){
					intervalId=setInterval(function(){
						autoPlay();
					},1000*delay);
				});
			}
		});
	}
})(jQuery);