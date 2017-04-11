// JavaScript Document

function validarFormulario() { 
	//primero valido que el usuario halla ingresado caracteres en el imput de nombre si no lo hizo retorno false para que el formulario no se envie y el usuario lo deba completar, si no sigue adelante la funcion.
   	if (document.formulario.nombre.value.length==0){ 
      	 alert("Nombre es obligatorio") 
      	 document.formulario.nombre.focus() 
      	 return false; 
   	} 
	
	//valido que el usuario halla ingresado informacion y que esta tenga los caracteres propios de una direccion de email.
	var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	valor = document.getElementById("email").value;
	if( !(ck_email.test(valor)) ) {
 	 alert("Email debe contener un email")
 	 return false;
	}
	
	//valido que el usuario halla seleccionado por lo menos unas de las casillas de checkbox usando el if y el conector logico &&.
	if(!document.getElementById('cunsulta').checked && !document.getElementById('comentario').checked && !document.getElementById('sugerencia').checked && !document.getElementById('malfuncionamiento').checked && !document.getElementById('otro').checked)
	
	{alert('No se ha seleccionado ningun servicio');
	return false
}
	
	//validar que se halla seleccionado el radio creando una variable seleccionado en falso despues hago una estructura repetitiva para recorrer las opciones que el usuario tenia y ver si alguna esta chequiada si lo esta la variable cambia a positivo si no devuelvo false para que el usuraio corrija.
	
	opciones = document.getElementsByName("sexo");
 
	var seleccionado = false;
	for(var i=0; i<opciones.length; i++) {    
  		if(opciones[i].checked) {
    		seleccionado = true;
    		break;
  			}
		}
 
	if(!seleccionado) {
	alert('No se ha seleccionado sexo');
  	return false;
	}
	
	//Por ultimo si todo Salio bien le doy las gracias al usuario con una ventana de alerta.
	
   	alert("Muchas gracias por tu interes"); 
   	document.formulario.submit(); 

}