require('dotenv').config()
const express = require('express') //incluir un paquete en node
const hbs =require('hbs')
const app = express()
const port = process.env.PORT

app.use( express.static('public/assets'))

//Motor de  la plantilla
hbs.registerPartials(__dirname + '/views/partials', function (err) {})
hbs.registerPartials(__dirname+ '/views/admin/partials',function(err) {})
hbs.registerPartials(__dirname+ '/views/student/partials',function(err) {})
hbs.registerPartials(__dirname+ '/views/teacher/partials',function(err) {})
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')


//verificar si el puerto np esta escuchando
app.listen(port, () =>{
   console.log(`Escuchando el puerto ${port}`)
})

//Ruta de INDEX (LOGIN)
app.get('/', (req,res) =>{
    res.render('login', {
        nombre: 'login'
    })
 })


 //Ruta de RECUPERAR CONTRASEÑA
 app.get('/recuperar', (req,res) =>{
    res.render('recuperar', {
        nombre: 'recuperar'
    })
 })

//RUTAS DEL ADMINISTRADOR

 //Ruta de DASHBOARD
 app.get('/dashboard', (req,res) =>{
    res.render('admin/dashboard', {
        nombre: 'dashboard'
    })
 })


//Ruta de ROLES
 app.get('/roles', (req,res) =>{
    res.render('admin/roles', {
        nombre: 'roles'
    })
 })


 //Ruta de USUARIOS
 app.get('/usuarios', (req,res) =>{
    res.render('admin/usuarios', {
        nombre: 'usuarios'
    })
 })

 //Ruta de registro de USUARIOS
 app.get('/registroUser', (req,res) =>{
    res.render('admin/registrouser', {
        nombre: 'registrouser'
    })  
 })


 //Ruta de BENEFICIARIOS
 app.get('/beneficiarios', (req,res) =>{
    res.render('admin/beneficiarios', {
        nombre: 'beneficiarios'
    })
 })


 //Ruta de LIBROS
 app.get('/libros', (req,res) =>{
    res.render('admin/libros', {
        nombre: 'libros'
    })
 })


 //Ruta de agregar LIBROS
 app.get('/addBook', (req,res) =>{
    res.render('admin/addBook', {
        nombre: 'addBook'
    })
 })


 //Ruta de PRÉSTAMOS
 app.get('/prestamos', (req,res) =>{
    res.render('admin/prestamos', {
        nombre: 'prestamos'
    })
 })


 //Ruta de RESERVAS
 app.get('/reservas', (req,res) =>{
    res.render('admin/reservas', {
        nombre: 'reservas'
    })
 })


 //Ruta de agregar RESERVAS
 app.get('/addReserva', (req,res) =>{
    res.render('admin/addReserva', {
        nombre: 'addReserva'
    })
 })



 //Ruta de SANCIONES
 app.get('/sanciones', (req,res) =>{
    res.render('admin/sanciones', {
        nombre: 'sanciones'
    })
 })


  //Ruta de registro de SANCIONES
  app.get('/registrosancion', (req,res) =>{
    res.render('admin/registrosancion', {
        nombre: 'registrosancion'
    })
 })

 //RUTAS DE LOS PROFESORES
 app.get('/teacherInicio', (req,res) =>{
    res.render('teacher/inicio', {
        nombre: 'inicio'
    })
 })

 app.get('/teacherPrestamos', (req,res) =>{
    res.render('teacher/prestamos', {
        nombre: 'prestamos'
    })
 })

 app.get('/teacherReservas', (req,res) =>{
    res.render('teacher/reservas', {
        nombre: 'reservas'
    })
 })

 app.get('/teachersanciones', (req,res) =>{
    res.render('teacher/sanciones', {
        nombre: 'sanciones'
    })
 })

 //RUTAS DE LOS ESTUDIANTES
 app.get('/studentInicio', (req,res) =>{
    res.render('student/inicio', {
        nombre: 'inicio'
    })
 })

 app.get('/studentPrestamos', (req,res) =>{
    res.render('student/prestamos', {
        nombre: 'prestamos'
    })
 })

 app.get('/studentSanciones', (req,res) =>{
    res.render('student/sanciones', {
        nombre: 'sanciones'
    })
 })

//Ruta de Error de pagina no encontrada
app.get('*', (req, res) => {
    res.render('404',{
        nombre:'Página no encontrada'
    })
})