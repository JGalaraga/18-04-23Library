const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	documento:/^[0-9\.]{5,20}$/,
    horaInicio: /^(?:0?[1-9]|1[0-2]):[0-5][0-9]\s?(?:[aApP](\.?)[mM]\1)?$/,
    horaFin: /^(?:0?[1-9]|1[0-2]):[0-5][0-9]\s?(?:[aApP](\.?)[mM]\1)?$/,
}

const campos = {	
	documento:false,
	horaInicio:false,
    horaFin:false,
}	

const validarFormulario = (e) => {
	switch (e.target.name){
		case "documento":
			validarCampo(expresiones.documento, e.target, 'documento');
		break;
		case "fecha":
			validarCampo(expresiones.fecha, e.target, 'fecha');
		break;
		case "horaInicio":
			validarCampo(expresiones.horaInicio, e.target, 'horaInicio');
		break;
		case "horaFin":
			validarCampo(expresiones.horaFin, e.target, 'horaFin');
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

const getValidarInfoReservas = () => {

    if( campos.documento == true && campos.horaInicio == true && campos.horaFin == true){
        alert('Formulario enviado correctamente!!')
		document.location.href='/reservas'
    }else{
		alert('Ingrese el formulario correctamente')
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
}

const buttonAgregarReservas= document.querySelector('#agregarReserva')
buttonAgregarReservas.addEventListener('click', getValidarInfoReservas);

const buttonActualizarReservas= document.querySelector('#actualizarReserva')
buttonActualizarReservas.addEventListener('click', getValidarInfoReservas);