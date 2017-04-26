// JSON= JavaScript Object Notation
// conjunto[
// 	llave:valor,
// 	llave2:valor,
// 	llave3{
// 		llave4:valor,
// 		llave5:valor
// 	}
// ]
const rq= require('electron-require');
const main= rq.remote('./main.js');
const $ = require("jquery");
function datosRamdon(){
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	$("#txtNombre").html(data.results[0].name.first+" "+data.results[0].name.Last)
  	$("#imgFoto").attr("src",data.results[0].picture.large)
  },
  error(a,b,c){
  	alert("Sin internet o sin servidor")
  }
});
}
$("#btnInfo").on("click",datosRamdon);
