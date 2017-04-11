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
	
		
	//Por ultimo si todo Salio bien le doy las gracias al usuario con una ventana de alerta.
	
   	alert("Muchas gracias por subscribirte"); 
   	document.formulario.submit(); 

}