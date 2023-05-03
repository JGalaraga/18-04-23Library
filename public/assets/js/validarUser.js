const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {

    rol: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    documento: /^[1-9]*(\.?)[ 1-9]+$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/,
    grado:/^\d{1,40}$/,
    Grupo: /^\d{1,40}$/,
	password: /^.{8,12}$/, // 4 a 12 digitos.
    
    

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
    var opcion = confirm("Está seguro de elimar el usuario");
    if (opcion == true) {
		document.location.href='/usuarios'
	} else {
	    mensaje = "Has clickado Cancelar";
	}

}



const campos = {
	rol: false,
	documento: false,
	nombre: false,
	apellido: false,
	correo: false,
	grado: false,
	Grupo: false,
	password: false,
}



const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}




const validarFormulario = (e) => {
	switch (e.target.name) {
        case "rol":
			validarCampo(expresiones.rol, e.target, 'rol');
		break;
        case "documento":
			validarCampo(expresiones.documento, e.target, 'documento');
		break;
		case "nombres":
			validarCampo(expresiones.nombre, e.target, 'nombres');
		break;
		case "apellidos":
			validarCampo(expresiones.apellido, e.target, 'apellidos');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
        case "grado":
			validarCampo(expresiones.grado, e.target, 'grado');
		break;
        case "Grupo":
			validarCampo(expresiones.Grupo, e.target, 'Grupo');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
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

    const documento = document.querySelector('#documento')
	const nombre = document.querySelector('#nombres')
    const apellido = document.querySelector('#apellidos')
	const correo = document.querySelector('#correo')
    const grado = document.querySelector('#grado')
	const Grupo = document.querySelector('#Grupo')

	//campos.rol == false || campos.documento == false || campos.nombre == false || campos.apellido == false || campos.correo == false || campos.grado == false || campos.Grupo == false


	if(documento.value == '' && nombre.value == ''  && apellido.value == '' && correo.value == '' ){
		
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
		

	
	}else{
	alert(
			'Formulario enviado correctamente',
			
		  )

		  document.location.href='/usuarios'
		
		  document.querySelector('#formulario').reset();
	
	}


}
const buttonIngresar= document.querySelector('#agregar')
buttonIngresar.addEventListener('click', userenviar);



const useractual = () =>{
	alert('La información del usuario ha sido actualizado correctamente')
	document.location.href='/usuarios'
}
const buttonActualizarUser= document.querySelector('#actualizar')
buttonActualizarUser.addEventListener('click', useractual);



	
