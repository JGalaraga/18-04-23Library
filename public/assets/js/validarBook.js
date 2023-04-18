const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	isbn:/^[0-9\-]{1,20}$/,
	titulo:/^([A-ZÁÉÍÓÚÑa-zñáéíóúñ]{1,}'?-?[A-ZÁÉÍÓÚÑa-zñáéíóú 0-9]+[\s]*)+$/,
	ilustrador:/^([A-ZÁÉÍÓÚÑa-zñáéíóúñ]{1,}'?-?[A-ZÁÉÍÓÚÑa-zñáéíóú 0-9]+[\s]*)+$/,
	impresion:/^([A-ZÁÉÍÓÚÑa-zñáéíóúñ]{1,}'?-?[A-ZÁÉÍÓÚÑa-zñáéíóú 0-9]+[\s]*)+$/,
	autor:/^([A-ZÁÉÍÓÚÑa-zñáéíóúñ]{1,}'?-?[A-ZÁÉÍÓÚÑa-zñáéíóú 0-9]+[\s]*)+$/,	
	editorial:/^([A-ZÁÉÍÓÚÑa-zñáéíóúñ]{1,}'?-?[A-ZÁÉÍÓÚÑa-zñáéíóú 0-9]+[\s]*)+$/,
	cantidad:/^[0-9]{1,20}$/,
	categoria:/^[0-9]{1,20}$/,
}

const campos = {	
	isbn:false,
	titulo:false,
	ilustrador:false,
	impresion:false,
	autor:false,
	editorial:false,
	cantidad:false
}

const validarFormulario = (e) => {
	switch (e.target.name){
		case "isbn":
			validarCampo(expresiones.isbn, e.target, 'isbn');
		break;
		case "titulo":
			validarCampo(expresiones.titulo, e.target, 'titulo');
		break;
		case "ilustrador":
			validarCampo(expresiones.ilustrador, e.target, 'ilustrador');
		break;
		case "impresion":
			validarCampo(expresiones.impresion, e.target, 'impresion');
		break;
		case "autor":
			validarCampo(expresiones.autor, e.target, 'autor');
		break;
		case "editorial":
			validarCampo(expresiones.editorial, e.target, 'editorial');
		break;
		case "cantidad":
			validarCampo(expresiones.cantidad, e.target, 'cantidad');
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



const getValidarInfoLibros = () => {

    if( campos.isbn == true && campos.titulo == true && campos.ilustrador == true && campos.impresion == true && campos.autor == true && campos.editorial == true && campos.cantidad == true	){
        alert('Formulario enviado correctamente!!')
		document.location.href='/libros'
    }else{
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
}

const buttonAgregarLibro= document.querySelector('#agregarLibro')
buttonAgregarLibro.addEventListener('click', getValidarInfoLibros);

const buttonActualizarLibro= document.querySelector('#actualizarLibro')
buttonActualizarLibro.addEventListener('click', getValidarInfoLibros);