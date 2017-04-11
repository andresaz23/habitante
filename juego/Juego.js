// JavaScript Document

//primero creo una variable universal para guardar el valor del puntaje y usarlo para saber si es la primera jugada ya que solo hay una oportunidad en el juego.

var puntaje=0;

//aqui escribo la funcion del juego.

function jugada(turno){

//primero controlo con la informacion recibida mas la variable puntaje si si es la primera jugada si no lo es saco una alerta para avisarle que ya perdio su oportunidad, si es la primera vez continua la funcion.

var control=puntaje+turno;
if(control!=1){
	alert(" Lo sentimos… Ya jugaste ");
}else{
 
 //a continuacion tomo los valores que el usuario selecciono en el tag select y los convierto en variables de la funcion, despues los convierto en valores numericos.
 
		v1=document.getElementById("esquina1").value;
		v2=document.getElementById("esquina2").value;
		v3=document.getElementById("esquina3").value;
		
		parseInt(v1);
		parseInt(v2);
		parseInt(v3);
		
//aqui comparo el valor que el usuario ingreso con la respuesta correcta y si es correcto le sumo uno al puntaje.
		
	if(v1==1){puntaje++;};
	if(v2==3){puntaje++;};
	if(v3==2){puntaje++;};
	
//a continuacion basado en el puntaje obtenido emito un mensaje de alerta en el cual le digo al usuario cuanto fue su puntaje y un mensaje de animo o de felicitaciones segun halla sido el puntaje obtenido.

	switch (true) {
    case (puntaje<=0):
        alert("0 Aciertos ¿Seguro que conoces Buenos Aires?");
        break;
	case (puntaje==1):
        alert("1 Acierto ¡Salí mas Buenos Aires te espera¡");
        break;
	case (puntaje==2):
        alert("2 Aciertos ¡Casi perfecto¡");
        break;
	case (puntaje==3):
        alert("3 Aciertos ¡Felicidades Vos si vivis tu ciudad.¡");
        break;
}
}
}