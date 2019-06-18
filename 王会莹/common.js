//根据id获取页面元素
function $id(id){
	return document.getElementById(id);
}
//获取任意区间的整数值
function rand(min,max){ //[min,max]
	return Math.round( Math.random()*(max-min) + min );
}

function rand2(min,max){ //[min,max]
	return Math.floor( Math.random()*(max-min+1) + min );
}

//获取随机的颜色值
function getColor2(){
	var color = "#";
	for( var i = 1 ; i <= 6 ; i++ ){
		color += rand(0,15).toString(16);
	}
	return color;
}
function getColor(){
	return "rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")";
}

//获取时间格式 年月日 时分秒
function dateToString(now){
	//定义一个时间对象 
	var now = new Date();
	//获取年月日
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var d = now.getDate();
	//获取时分秒
	var h = now.getHours();
	var m = toTwo( now.getMinutes() );
	var s = toTwo( now.getSeconds() );
	 
	return year+"-"+month+"-"+d + " "+ h + ":" + m + ":" +s;
}
//判断参数是否小于10  小于10 前面拼接0
function toTwo( val ){
	return val < 10 ? "0"+val : val;
}
//定义一个函数 功能是获取验证码  字母和数字组成
function yzm(){
	var str = "";
	for( var i = 1 ; i <= 6 ; i++ ){
		var code = rand(48,122);
		if( code >= 58 && code <= 64 || code >= 91 && code <= 96 ){
			i--;
		}else{
			//转成对应的字符
			str += String.fromCharCode( code );
		}
	}
	return str;
}

//功能  创建一个元素
function createEle(ele){
	return document.createElement(ele);//返回创建的元素
}

//功能 添加一个元素到一个容器中
function append(parent,child){
	parent.appendChild( child );
}
