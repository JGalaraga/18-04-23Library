const conexion = require('../../db/conexion');

const requireAdmin = (req, res, next) => {
    if (req.session.usuario && req.session.usuario.rol === 'administrador' ) {
      next();
    } else {
        res.status(401).render('401');
    }
  };


  const requireProfe = (req, res, next) => {
    if (req.session.usuario && req.session.usuario.rol === 'profesor' ) {
      next();
    } else {
        res.status(401).render('401');
    }
  };

  const requireEstudiante = (req, res, next) => {
    if (req.session.usuario && req.session.usuario.rol === 'estudiante' ) {
      next();
    } else {
        res.status(401).render('401');
    }
  };

const postUsuario = (req, res) => {
  const { documento, password } = req.body;
  const sql = "SELECT u.*, r.nombreRol FROM usuarios u JOIN roles r ON u.idRol = r.idRol WHERE u.documento = ? AND u.password = ? ";

  conexion.query(sql,[documento, password], (err, data) => {
    console.log(sql);
    if (err) throw err;
    if(data.length > 0 ){
      console.log('correcto');
      console.log(data.length);
      const nombreRol = data[0].nombreRol;

      req.session.usuario = {
        documento,
        rol: nombreRol // Agregamos el rol a la sesión de usuario
      };

      if(nombreRol === 'administrador') {
        res.render('admin/dashboard');
      } else if(nombreRol === 'profesor'){
        res.render('teacher/inicio');
      }
      else if(nombreRol === 'estudiante'){
        res.render('student/inicio');
      }
    } else {
      console.log('incorrecto');
      console.log(data.length);
      res.send('<script>alert("Documento y/o contraseña incorrectos");window.location.href="/";</script>');
    }
  });
};



module.exports = { postUsuario , requireAdmin, requireProfe, requireEstudiante};


// function login(req, res) {
//     const { documento, password } = req.body;
//     const query = `SELECT * FROM usuarios WHERE documento = ? AND password = ?`;
//     conexion.query(query, [documento, password], (err, results) => {
//       if (err) throw err;
//       if (results.length > 0) {
//         // usuario válido
//         // también puede verificar el rol del usuario aquí
//         res.render('admin/dashboard');
       
//       } else {
//         console.log(' usuario inválido')
//         res.render('login', { error: 'Documento o contraseña inválidos' });
//       }
//     });
    
//   }
 

//   module.exports ={
//     login
//   }
