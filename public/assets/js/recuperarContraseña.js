// ---------- VALIDAR RECUPERAR ----------

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

const getValidarAdminRecuperar = (documentoadmin, email) => {
    return new Promise( (resolve, reject) => {
        let verificadoAdminRecupe = false
        for(indice in Administrador){
            validacionAdminre = Administrador[indice]
            if( validacionAdminre.documentoadmin == parseInt(documentoadmin)  && validacionAdminre.email ==  email){
              verificadoAdminRecupe = true
            }
        }
        if(verificadoAdminRecupe == true){
            resolve(verificadoAdminRecupe)
        }
        else{
            reject('El correo es Invalido') 
        }
  
    })
  }
  
  
  const getValidarRecuperar = () => {
    const documento = document.querySelector('#documento')
    const email = document.querySelector('#email')
    // const veri = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    // const esvalido = veri.test(email)

    if( documento.value == '' || documento.value == null || email.value == ''  || email.value == null){
      alert('Complete los campos')   
    }else{

      getValidarAdminRecuperar( documento.value , email.value )
      .then( verificadoAdminRecupe => {
        alert('Se ha enviado una nueva contraseña a su correo')
           document.location.href='/index'
          document.querySelector('#formularioRecuperar').reset();


      })
      .catch( err => alert('Datos incorrectos'))

    }

 
  
    }
  

  
    const buttonRecuperar= document.querySelector('#recuperar')
    buttonRecuperar.addEventListener('click', getValidarRecuperar,);
   