# jquery-tabPage
<br/>jQuery tabPage plug-in
<br/><b>大圣标签切换页--tabPage</b>
<br/>
<br/><link rel="stylesheet" type="text/css" href="css/tabPage.css" />
<br/><script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
<br/><script type="text/javascript" src="js/jquery.tabPage.js"></script>
<br/>
<br/><script language="javascript">
<br/>$(document).ready(function(){
<br/>	$(".tab").tabPage({
<br/>		way:"mouse",	//切换方式:chick|mouse 默认值:mouse
<br/>		speed:100,		//响应速度:(毫秒数) 默认值:100
<br/>		auto:true,		//自动切换:true|false 默认值:false
<br/>		delay:3			//自切延时:(秒) 默认值:3
<br/>	});
<br/>});
<br/></script>
