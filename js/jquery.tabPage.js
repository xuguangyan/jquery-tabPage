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
			
			//�����������趨Ĭ��ֵ
			var way		="mouse";	//�л���ʽ:chick|mouse Ĭ��ֵ:mouse
			var speed	=100;		//��Ӧ�ٶ�:(������) Ĭ��ֵ:100
			var auto	=false;		//�Զ��л�:true|false Ĭ��ֵ:false
			var delay	=3;			//������ʱ:(��) Ĭ��ֵ:3
			
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
				//�����ǩ
				$li.click(function(){
					setFocus($(this));
					return false;
				});
			}else{
				//�����ͣ
				$li.mouseover(function(){
					var liNode=$(this);
					timeoutId=setTimeout(function(){
							setFocus(liNode);
						},100);
				}).mouseout(function(){
					clearTimeout(timeoutId);
				});
			}
			
			//�Զ�����
			function autoPlay(){
				var $liNext=$li.filter(".tabin").next("li");
				if($liNext.length<=0) $liNext=$li.eq(0);
				setFocus($liNext);
			}
			
			//�л�ҳ
			function setFocus(obj){
				var index=$("li").index(obj);
				var $div=$this.children("div").eq(index);
				$div.addClass("contentin").siblings("div").removeClass("contentin");
				obj.addClass("tabin").siblings("li").removeClass("tabin");
			}
			
			//��Ӷ�ʱ��
			if(auto){
				intervalId=setInterval(function(){
					autoPlay();
				},1000*delay);
				
				//�������,�����ʱ��
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