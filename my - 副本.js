var h1=document.getElementsByTagName("h1");
var h2=document.getElementsByTagName("h2");
var h3=document.getElementsByTagName("h3");
var h4=document.getElementsByTagName("h4");
var h5=document.getElementsByTagName("h5");
var h6=document.getElementsByTagName("h6");
var a=document.getElementsByTagName("a");
var index = {
        1: "一：",
        2: "二:",
        3: "三:",
        4: "四:",
        5: "五:",
        6: "六:",
        7: "七:",
        8: "八:",
        9: "九:",
        10: "十:",
        11: "十一:",
        12: "十二:",
        13: "十三:",
    };

for(i=1;i<h1.length;i++){
	var id_value=h1[i].getAttribute("id").replace("toc_","");
	h1[i].innerHTML=index[id_value]+" "+h1[i].innerHTML;
}

for(i=0;i<h2.length;i++){
	var id_value=h2[i].getAttribute("id").replace("toc_","");
	h2[i].innerHTML=id_value +" "+h2[i].innerHTML;
}

for(i=0;i<h3.length;i++){
	var id_value=h3[i].getAttribute("id").replace("toc_","");
	h3[i].innerHTML=id_value +" "+h3[i].innerHTML;
}

for(i=0;i<h4.length;i++){
	var id_value=h4[i].getAttribute("id").replace("toc_","");
	h4[i].innerHTML=id_value +" "+h4[i].innerHTML;
}

for(i=0;i<h5.length;i++){
	var id_value=h5[i].getAttribute("id").replace("toc_","");
	h5[i].innerHTML=id_value +" "+h5[i].innerHTML;
}

for(i=0;i<h6.length;i++){
	var id_value=h6[i].getAttribute("id").replace("toc_","");
	h6[i].innerHTML=id_value +" "+h6[i].innerHTML;
}

for(i=0;i<a.length;i++){
	var id_value=a[i].getAttribute("href").replace("#toc_","");
	
	if(a[i].getAttribute("href").match("toc_")){
		if(id_value%1 === 0){
			a[i].innerHTML=index[id_value]+" "+a[i].innerHTML;
		}else{
			a[i].innerHTML=id_value+" "+a[i].innerHTML;
		}
	}
}

var backButton=$('.back_to_top');
    function backToTop() {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    }
    backButton.on('click', backToTop);
 
    $(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
        if ($(window).scrollTop() > $(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();
    });

