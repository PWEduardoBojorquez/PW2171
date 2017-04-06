//Agrega al codigo (un enlace) al main.js
const rq= require('electron-require');
const main= rq.remote('./main.js');
var botonesNumero= ["btn00","btn01","btn02","btn03","btn04","btn05","btn06","btn07","btn08","btn09"];

var botonesOperador= ["btnSumar","btnRestar","btnMultiplicar","btnDividir"];

function numeros(){
	alert(this.id);
	alert(this.value);
}
function operadores(){

}
function igual(){

}
function borrar(){
	
}
//Asignacion de eventos a los botones de numeros
for (var i=0;i<botonesOperador.length;i++){
	document.getElementByID(botonesOperador [i]).addEventListener('click',numeros);
}
//Asignacion de eventos para los botones de operador
for (var i=0;i<botonesNumero.length;i++){
	document.getElementByID(botonesNumero [i]).addEventListener('click',Operadores);
}
document.getElementByID("btnIgual").addEventListener('click',igual)
document.getElementByID("btnBorrar").addEventListener('click',borrar)
