
var name ="Степан";
alert(name);
var a=9, b=1;
var c=a-b;
var d=7;
var result=c+d;
alert(result);
var variant;
variant=prompt("Введіть номер вашого варіанту ");
var per=variant;
if(per>=7){alert("Вірно") ;}
else{ alert("Невірно");}
if(per%2==0){
	per-=-7;
	}
else{per-=3;
	}
	alert(per);
	Limit=(variant-(-10));
	document.write("Квадрати чисел від 1 до " +Limit +" :");
	for(var i=1;i<=Limit;i++){
		document.write("<br />" +i + " = " + (i*i)); 
	}
	document.write("<br />" + "Прості числа від 2 до " + Limit + "<br />");
    var iter =0;
	for(var i=2;i<=Limit;i++){
		for(var j=1;j<=Limit;j++){
		if(i%j==0){iter++;  }}
		if(iter==2){document.write( +i +"<br />"); 
		iter=0; }
        else{ iter=0;}
	} 

	
