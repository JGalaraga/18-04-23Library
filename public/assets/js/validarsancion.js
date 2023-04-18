const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {


	observacion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/




}


const campos = {
	observacion: false



}




const validarFormulario = (e) => {
	switch (e.target.name) {
		case "observacion":
			validarCampo(expresiones.observacion, e.target, 'observacion');
			break;



	}
}



const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
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



const validarsa = () => {

	const seleccionar = document.querySelector('#sancion')
	const seleccionares = document.querySelector('#estado')
	const observacion = document.querySelector('#observacion')

	if(observacion.value == '' || observacion.value == null ){
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
	} 
	if (seleccionar.value == '' || seleccionar.value == 0) //si la opcion seleccionada es activo
	{
		document.getElementById('dib').innerHTML += "Seleccione un tipo de sancion.";


	} if (seleccionares.value == '' || seleccionares.value == 0) //si la opcion seleccionada es activo
	{
		document.getElementById('di').innerHTML += "Seleccione un tipo de estado.";


	}

	

	else {

		alert(
			'Formulario enviado correctamente',
			
		  )

		document.location.href = '/sanciones'
		document.querySelector('#formulario').reset();
	}

}




const buttonIngresar = document.querySelector('#agregar')
buttonIngresar.addEventListener('click', validarsa)



const sancionactual = () => {
	alert('La información de la sanción ha sido actualizado correctamente')
	document.location.href = '/sanciones'
}
const buttonActualizarsancion = document.querySelector('#actualizar')
buttonActualizarsancion.addEventListener('click', sancionactual);







