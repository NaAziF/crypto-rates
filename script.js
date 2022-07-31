//callback function
// alert("crypto")

//const obj1 = {name:"faizan", class1:"FyBbaCa", age:"19", address:"Ganderbal", fav:"Computer", hobby:"coding"}
//let keys = Object.keys(obj1);
let cxr=document.getElementById('crypto1');
cxr.addEventListener('click',crypto)
function crypto(){
	document.write(`<div id="picdiv"><center><img src="pl.svg" style="margin-top: 14%;"></center></div>`)

	console.log("function executed")
const xhr= new XMLHttpRequest();
xhr.open('GET','/crypto',true)
// xhr.onprogress=function() {
	
xhr.onload=function (){
	let adb=document.getElementById('picdiv');
	adb.style="display:none";
	let res= this.responseText;
	const obj1=JSON.parse(res);
	// console.log(obj1);
	let keys=Object.keys(obj1);
	//document.write(...keys)
	for(i=0;i<keys.length;i++)
	{	document.write("<b>Coin:");
		document.write(keys[i] + "  </b>:  ")
		document.write("<b>WazirX </b>= " + obj1[keys[i]].wrx + " ")
		document.write("<b>BitCoin</b> = " + obj1[keys[i]].btc + " ")
		document.write("<b>Euro = </b>" + obj1[keys[i]].eur + " ")
		document.write("<b>idr = </b>" + obj1[keys[i]].idr + " ")
		document.write("<b>Indian Rupee = </b>" + obj1[keys[i]].inr + " ")
		document.write("<b>NGN = </b>" + obj1[keys[i]].ngn + " ")
		document.write("<b>RUB = </b>" + obj1[keys[i]].rub + " ")
		document.write("<b>SAR = </b>" + obj1[keys[i]].sar + " ")
	document.write("<b>TRY  = </b>" + obj1[keys[i]].try + " ")
	document.write("<b>UAH = </b>" + obj1[keys[i]].uah + " ")
	document.write("<b>USDT = </b>" + obj1[keys[i]].usdt + "<br> ")
	}
	
	
	
}
xhr.send();

}