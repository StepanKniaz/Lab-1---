//Завдання 2
function kniaz(data,month,number){
	return((data+month)/number)

}
alert("2 Завдання")
var data,month;
data=prompt("Введіть дату вашого народження");
month=prompt("Введіть місяць вашого  народження");

alert("Тестування функції : "  +kniaz(+data,+month,+number));