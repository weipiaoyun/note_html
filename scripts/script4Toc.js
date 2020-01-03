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
            $(this).addClass("active").siblings().removeClass("active");
            $(this).find(">ul").slideToggle(200);
            $(this).siblings().find("ul").hide();
        })

    	$(".toc .menu2").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            $(this).find(">ul").slideToggle(200);
            $(this).siblings().find("ul").hide();
        })

     	$(".toc .menu3").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            $(this).find(">ul").slideToggle(200);
            $(this).siblings().find("ul").hide();
        })

      	$(".menu4").click(function(){
      		$(this).addClass("active").siblings().removeClass("active");
            $(this).find(">ul").slideToggle(200);
            $(this).siblings().find("ul").hide();
      	})

      	//  阻止事件冒泡
    	$(".toc .menu1 ul").bind("click",function(event){
        	event.stopPropagation();
    	});
