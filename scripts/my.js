﻿var h1=document.getElementsByTagName("h1");
var h2=document.getElementsByTagName("h2");
var h3=document.getElementsByTagName("h3");
var h4=document.getElementsByTagName("h4");
var h5=document.getElementsByTagName("h5");
var h6=document.getElementsByTagName("h6");
var img=document.getElementsByTagName("img");
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
        14: "十四:",
        15: "十五:",
        16: "十六:",
        17: "十七:",
        18: "十八:",
        19: "十九:",
        20: "二十:",
    };

for(i=0;i<h1.length;i++){
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

/*更改图片路径*/
var url = window.location.href;

for(i=0;i<img.length;i++){
	//var id_value=img[i].getAttribute("id").replace("toc_","");
	//
	
	/*本地不替换*/
	var nnn = url.search(/mysite/);
	if(nnn > 0){
		break;
	} else {
	} 

	var backgroundImageRegex=/file\:\/\/\/D\:\\vim\\vim\\mysite\\note\/images\/(.*)/;
	var backgroundImageRegex=/.*images\/(.*)/;
	var backgroundFileRegex=/.*Doc\/(.*)/;
	var nI = img[i].src.search(/images\//i);
	var doc = img[i].src.search(/Doc\//i);
	////var backgroundImageRegex=/file/;
	//var backgroundImageRegex=/http:\/\/weipiaoyun.gitee.io\/note_html\/images\/(.*)/;
	var matchResult=img[i].src.match(backgroundImageRegex);
	var imgPath = img[i].src;
	console.log(imgPath);
	if(nI > 0 && matchResult.length >0 ){
		//alert(matchResult[1]);
		imgPath = "https://weipiaoyun.github.io/note_html/images/" + matchResult[1];
	}

	if(nI > 0 && matchResult.length >0 ){
		//alert(matchResult[1]);
		imgPath = "https://weipiaoyun.github.io/note_html/images/" + matchResult[1];
	}
	
	//alert("aaaa");
	img[i].src=imgPath;
}




/*返回首页根据地址不同返回不同*/
var div=document.getElementById('returnIndexA');
	 var nnn = url.search(/weipiaoyun/);
	 if(nnn > 0){
		 div.href="https://weipiaoyun.github.io/note_html/笔记整理.html";
	 } else {
		 div.href="d:/vim/vim/mysite/note_html/笔记整理.html";
	 }



/*隐藏返回顶部， 手机用的*/
var nnnn = url.search(/mysite/);
if(nnnn > 0){
	backButton.fadeOut();
	div1.style.display = "none";
} 

