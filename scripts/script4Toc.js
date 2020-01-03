/*
 $(".toc .menu1").click(function(){
            $(this).find("ul").find("ul").find("li").hide();
			$(this).find("ul").find("ul").slideToggle();

			$(this).find("ul").find("ul").css({"margin-left":"12px"});
            $(this).addClass("active").siblings().removeClass("active");
            $(this).find("ul").slideToggle(300);
            $(this).siblings().find("ul").hide();

        })
*/

$(".toc .menu1").click(function(){
	if(window.matchMedia("(min-width: 800px)").matches){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).find(">ul").slideToggle(200);
		$(this).siblings().find("ul").hide();
	}
})

$(".toc .menu2").click(function(){
	if(window.matchMedia("(min-width: 800px)").matches){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).find(">ul").slideToggle(200);
		$(this).siblings().find("ul").hide();
	}
})

$(".toc .menu3").click(function(){
	if(window.matchMedia("(min-width: 800px)").matches){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).find(">ul").slideToggle(200);
		$(this).siblings().find("ul").hide();
	}
})

$(".menu4").click(function(){
	if(window.matchMedia("(min-width: 800px)").matches){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).find(">ul").slideToggle(200);
		$(this).siblings().find("ul").hide();
	}
})

//  阻止事件冒泡
$(".toc .menu1 ul").bind("click",function(event){
	event.stopPropagation();
});


var backButton=$('.back_to_top');

function backToTop() {
	$('html,body').animate({
		scrollTop: 0
	}, 800);
}

backButton.on('click', backToTop);
 
var div1=document.getElementById('back_to_topA');
    $(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
		//滚动的时候检测，如果电脑端，直接返回
		/*
		var nnn = url.search(/mysite/);
		if(nnn > 0){
			div1.style.display = "none";
			return;
		} else {
		} 
		*/

		if(window.matchMedia("(min-width: 800px)").matches){
		} else {
			return;
		}

        if ($(window).scrollTop() > $(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();


    });
