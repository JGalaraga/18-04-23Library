 
 //---------VALIDAR LOGIN------
 
 const Administrador = [
    {
        documentoadmin: 123456,
        contraseña: '123',
        nombre: 'Yeni',
        email: 'yeni12@gmail.com'
    },
  
    {
      documentoadmin: 654321,
        contraseña: '2121',
        nombre: 'Jazmin',
        email: 'jazmin21@gmail.com'
    },
  
    {
      documentoadmin: 1472583,
        contraseña: '333',
        nombre: 'Sara',
        email: 'sara14@gmail.com'
    }
  ]
  
  
  const Profesor = [
    {
        documentoprofe: 20202022,
        contraseña: '123',
        nombre: 'Juliana',
        email: 'juliana20@gmail.com'
    },
  
    {
      documentoprofe: 20222021,
        contraseña: '2121',
        nombre: 'Fernanda',
        email: 'fernanda21@gmail.com'
    },
  
    {
      documentoprofe: 20232200,
        contraseña: '333',
        nombre: 'Carlos',
        email: 'carlos33@gmail.com'
    }
  ]
  
  const Estudiante = [
    {
        documentoestu: 85233,
        contraseña: '123',
        nombre: 'Juan',
        email: 'juan21@gmail.com'
    },
  
    {
      documentoestu: 99564,
        contraseña: '2121',
        nombre: 'Jhorman',
        email: 'jhorman99@gmail.com'
    },
  
    {
      documentoestu: 775201,
        contraseña: '333',
        nombre: 'Esteban',
        email: 'esteban77@gmail.com'
    }
  ]
  
  
  
  const getValidarAdministrador = (documentoadmin, contraseña) => {
    return new Promise( (resolve, reject) => {
        let verificadoAdmin = false
        for(indice in Administrador){
            validacionAdmin = Administrador[indice]
            if( validacionAdmin.documentoadmin == parseInt(documentoadmin)  && validacionAdmin.contraseña ==  contraseña){
              verificadoAdmin = true
            }
        }
        if(verificadoAdmin == true){
            resolve(verificadoAdmin)
        }
        else{
          reject('El Profesor No existe') 
           
        }
  
    })
  }
  
  
  
  const getValidarProfesor = (documentoprofe, contraseña) => {
    return new Promise( (resolve, reject) => {
        let verificadoProfesor = false
        for(indice in Profesor){
            validacionProfe = Profesor[indice]
            if( validacionProfe.documentoprofe == parseInt(documentoprofe)  && validacionProfe.contraseña ==  contraseña){
              verificadoProfesor = true
            }
        }
        if(verificadoProfesor == true){
            resolve(verificadoProfesor)
        }
        else{
          reject('El Profesor No existe') 
        }
  
  
    })
  }
  
  
  
  const getValidarEstudiante = (documentoestu, contraseña) => {
    return new Promise( (resolve, reject) => {
        let verificadoEstudiante = false
        for(indice in Estudiante){
            validacionEstu = Estudiante[indice]
            if( validacionEstu.documentoestu == parseInt(documentoestu)  && validacionEstu.contraseña ==  contraseña){
              verificadoEstudiante = true
            }
        }
        if(verificadoEstudiante == true){
          resolve(verificadoEstudiante) 
        }
        else{
          
          reject('El Estudiante No existe') 
        }
  
   
    })
  }
  
  
  // const hoy = new Date()
  // const fechayhora = hoy

  var ojoo = document.getElementById("ojoo")
var contraseña = document.getElementById("contraseña")



function validarojo(){

  if(contraseña.type == "password"){
    contraseña.type = "text"

  }
  else{
    contraseña.type ="password"

  }

}

ojoo.addEventListener("click", validarojo)

  
  
  const getValidarLogin = () => {
    const documento = document.querySelector('#documento')
    const contraseña = document.querySelector('#contraseña')

    if( documento.value == '' || documento.value == null || contraseña.value == ''  || contraseña.value == null){
      alert('Complete los campos')   
       
   }else{
 
     getValidarAdministrador( documento.value , contraseña.value )
     .then( verificadoAdmin => {
         document.location.href='/dashboard'
     })
  
    
 
      //  getValidarProfesor( documento.value , contraseña.value )
      //  .then( verificadoProfesor => {
      //      document.location.href='/teacherInicio'
 
      //  }),
        
           
      //    getValidarEstudiante( documento.value , contraseña.value )
      //    .then( verificadoEstudiante => {
      //        document.location.href='/studentInicio'
   
      //    })

         .catch( err => alert('Datos incorrectos'))
 
       }


  }


const buttonIngresar= document.querySelector('#ingresar')
buttonIngresar.addEventListener('click', getValidarLogin,);


 











// const getValidarLogi = () => {
//   const documento = document.querySelector('#documento')
//   const contraseña = document.querySelector('#contraseña')

//   if(documento.value != Estudiante.documentoestu || contraseña.value != Estudiante.contraseña || documento.value != Administrador.documentoadmin || contraseña.value != Administrador.contraseña || documento.value != Profesor.documentoprofe || contraseña.value != Profesor.contraseña ){
//     alert('datos incorrectos')

//   }
 
// }



// const buttonIngresr= document.querySelector('#ingresar')
// buttonIngresr.addEventListener('click', getValidarLogi,);





 
 
