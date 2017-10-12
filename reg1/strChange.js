/*
* @Author: Administrator
* @Date:   2017-10-12 08:56:03
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-12 10:06:15
*/
function change(str,obj){
	var reg=/\w+/;
	var result;
	while(result=reg.exec(str)){
		var key=result[0];
		var value=obj[key];
		// 当上面obj["key"]时无限循环？？？
		str=str.replace(key,value);
	}
	return str;
}
function change_pro(str,obj){
	// reg=/{{(\w+)}}/g看情况用，有replace()这种就不用；会出问题；
	var reg=/{{(\w+)}}/;
	var result;
	while(result=reg.exec(str)){
		var key=result[1];
		var value=obj[key];
		str=str.replace(result[0],value);
	}
	return str;
}