// JavaScript Document

//primeroque todo creo dos arrays en los cuales almacenos las url de las imagenes que se van a visualizar y los textos que las van a acompañar.

var foto = new Array();
foto[0] = "img/deambulando.jpg";
foto[1] = "img/los-otros.jpg";
foto[2] = "img/luna.jpg";
foto[3] = "img/observado.jpg";
foto[4] = "img/soledad.jpg";
foto[5] = "img/tarot-egipcio.jpg";



var texto = new Array();
texto[0] = "Deambulando";
texto[1] = "Los otros";
texto[2] = "Luna";
texto[3] = "Observado";
texto[4] = "Soledad";
texto[5] = "Tarot egipcio";


//a continuacion creo una variable global que me mantendra informado de que imagenen esta visible en que momento.

var visible = o;

//al inicial la funcion lo primero que hago es que fijo la posicion del contendor de la paguina para que no se pueda seguir escroleando y se convierta en un fondo, como su posicion cambio la ubico de nuevo centrada, depsues hago visible el div fondo que servira para opacar la paguina y sobre el hago visible el div visor que es donde estaran las imagenes ademas de asignarle la imagen en la cual cliquie y su respectivo texto.

function iniciar(entrada){
	
	if (screen.availWidth<="768"){
		
	document.getElementById("contenedor").style.position="fixed";
	document.getElementById("contenedor").style.left="0";
	document.getElementById("contenedor").style.marginLeft="0";
	document.getElementById("fondo").style.display="block";
	document.getElementById("visor").style.display="block";
	document.getElementById("foto").src=foto[entrada];
	document.getElementById("texto").innerHTML=texto[entrada];
	visible=entrada;
		
		
		
		}else{
	
	document.getElementById("contenedor").style.position="fixed";
	document.getElementById("contenedor").style.left="50%";
	document.getElementById("contenedor").style.marginLeft="-500px";
	document.getElementById("fondo").style.display="block";
	document.getElementById("visor").style.display="block";
	document.getElementById("foto").src=foto[entrada];
	document.getElementById("texto").innerHTML=texto[entrada];
	visible=entrada;
}
}


//La funcion mover me permite ir hacia atras y hacia adelante, tomando el valor de la foto que esta visible le suma o le resta segun el valor que reciba segun el boton que se cliqueo.

function mover(sentido){
	var ultima = foto.length-1;
	aux=visible+sentido;
	
	//si la foto es la ultima le reasigno el valor de la primera y si es la primera y va hacia atras el valor de la ultima de esta manera la galeria se ve continua.
	
	if (aux<0){aux=ultima};
	if (aux>ultima){aux=0};
	visible=aux
	document.getElementById("foto").src=foto[visible];
	document.getElementById("texto").innerHTML=texto[visible];
	
}

//la funcion fin vuelve invisibles los div fonde y visor ocultando la galeria cambiando su atributo display a none, y debuelve la posicion y valores que siempre habia tenido el div contenedor para poder seguir navegando.

function fin(){
	document.getElementById("contenedor").style.position="static";
	document.getElementById("contenedor").style.left="0";
	document.getElementById("contenedor").style.marginLeft="auto";
	document.getElementById("fondo").style.display="none";
	document.getElementById("visor").style.display="none";
}