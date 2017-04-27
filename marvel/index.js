const rq= require('electron-require');
const main= rq.remote('./main.js');
const $= require("jquery");
var buscarPersonaje= function(){

}
//posiciona el cursor en el cuadro de texto
$("#txtpersonaje").focus();
//Evento del boton btnBuscar-click
$("#btnBuscar").on("click",buscarPersonaje);