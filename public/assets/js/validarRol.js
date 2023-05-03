const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {

    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    
    

}


function chequeo(){
    if(document.getElementById("customswitch").checked){
        document.getElementById("estado").
        textContent = "Activo"
    }else{
        document.getElementById("estado").
        textContent = "Inactivo"
    }
}



function cheque(){
    if(document.getElementById("customswitc").checked){
        document.getElementById("estad").
        textContent = "Activo"
    }else{
        document.getElementById("estad").
        textContent = "Inactivo"
    }
}








function eliminaruser()
    {
    var opcion = confirm("Está seguro de elimar el rol?");
    if (opcion == true) {
		document.location.href='/roles'
	} else {
	    mensaje = "Has clickado Cancelar";
	}

}



const campos = {
	nombre: false,
}




const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombres":
			validarCampo(expresiones.nombre, e.target, 'nombres');
		break;
	}
}




const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


const userenviar = () =>{

	const nombre = document.querySelector('#nombres')

	//campos.nombre == false


	if(nombre.value == ''){
		
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
		

	
	}else{
	alert(
			'Registro Exitoso',
			
		  )

		  document.location.href='/roles'
		
		  document.querySelector('#formulario').reset();
	
	}


}
const buttonIngresar= document.querySelector('#agregar')
buttonIngresar.addEventListener('click', userenviar);



const useractual = () =>{
	alert('La información del rol ha sido actualizado correctamente')
	document.location.href='/roles'
}
const buttonActualizarUser= document.querySelector('#actualizar')
buttonActualizarUser.addEventListener('click', useractual);


////validaciones prestamos

function estadoP(){
    if(document.getElementById("customswitch").checked){
        document.getElementById("estado").
        textContent = "Devuelto"
    }else{
        document.getElementById("estado").
        textContent = "No devuelto"
    }
}

function eliminaP()
    {
    var opcion = confirm("Está seguro de elimar el prestamo?");
    if (opcion == true) {
		document.location.href='/prestamos'
	} else {
	    mensaje = "Has clickado Cancelar";
	}

}
