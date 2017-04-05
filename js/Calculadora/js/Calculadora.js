//Variable global
var operador="";
function igual(){
 var valor1= document.calculadora.operador1.value;
 var valor2= document.calculadora.operador2.value;

 if(operador =="+"){
 	document.calculadora.resultado.value=eval(valor1+operador+valor2);
 }
 if(operador=="-"){
 	document.calculadora.resultado.value=eval(valor1-operador-valor2);
 }
 if(operador=="*"){
 	document.calculadora.resultado.value=eval(valor1-operador-valor2);
 }

}
function operadores(ope){
	operador=ope;
}
function numeros (num) {
	if (operador==""){ //Escribir en el operador1
		var valorInicial= document.calculadora.operador1.value;
		if(valorInicial=="0"){ //Elimina el cero
			document.calculadora.operador1.value="";
		}
		document.calculadora.operador1.value= 
		document.calculadora.operador1.value +num
	}
	else{ //Escribir operando2
		var valorInicial= document.calculadora.operador2.value;
		if(valorInicial=="0"){
			document.calculadora.operador2.value="";
		}
		document.calculadora.operador2.value= 
		document.calculadora.operador2.value +num
	}

}