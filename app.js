require('dotenv').config()
const express = require('express') //incluir un paquete en node
const hbs =require('hbs')
const app = express()
const session = require('express-session');
const conexion = require('./db/conexion')
const router = require('./routes/index');
const { requireAdmin, requireProfe, requireEstudiante } = require('./controllers/login/login');
const port = process.env.PORT





// Configura la sesión
app.use(session({
  secret: 'mi-secreto',
  resave: false,
  saveUninitialized: true
}));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



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


app.use('/', router);
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
 app.get('/dashboard', requireAdmin, (req,res) =>{
    res.render('admin/dashboard', {
        nombre: 'dashboard'
    })
 })


//Ruta de ROLES
 app.get('/roles', requireAdmin, (req,res) =>{
    res.render('admin/roles', {
        nombre: 'roles'
    })
 })


 //Ruta de USUARIOS
 app.get('/usuarios', requireAdmin, (req,res) =>{
    res.render('admin/usuarios', {
        nombre: 'usuarios'
    })
 })

 //Ruta de registro de USUARIOS
 app.get('/registroUser', requireAdmin, (req,res) =>{
    res.render('admin/registrouser', {
        nombre: 'registrouser'
    })  
 })


 //Ruta de BENEFICIARIOS
 app.get('/beneficiarios', requireAdmin,(req,res) =>{
    res.render('admin/beneficiarios', {
        nombre: 'beneficiarios'
    })
 })


 //Ruta de LIBROS
 app.get('/libros', requireAdmin, (req,res) =>{
    res.render('admin/libros', {
        nombre: 'libros'
    })
 })


 //Ruta de agregar LIBROS
 app.get('/addBook', requireAdmin, (req,res) =>{
    res.render('admin/addBook', {
        nombre: 'addBook'
    })
 })


 //Ruta de PRÉSTAMOS
 app.get('/prestamos', requireAdmin, (req,res) =>{
    res.render('admin/prestamos', {
        nombre: 'prestamos'
    })
 })


 //Ruta de RESERVAS
 app.get('/reservas',requireAdmin, (req,res) =>{
    res.render('admin/reservas', {
        nombre: 'reservas'
    })
 })


 //Ruta de agregar RESERVAS
 app.get('/addReserva', requireAdmin, (req,res) =>{
    res.render('admin/addReserva', {
        nombre: 'addReserva'
    })
 })



 //Ruta de SANCIONES
 app.get('/sanciones',requireAdmin, (req,res) =>{
    res.render('admin/sanciones', {
        nombre: 'sanciones'
    })
 })


  //Ruta de registro de SANCIONES
  app.get('/registrosancion', requireAdmin, (req,res) =>{
    res.render('admin/registrosancion', {
        nombre: 'registrosancion'
    })
 })

 //RUTAS DE LOS PROFESORES
 app.get('/teacherInicio', requireProfe,(req,res) =>{
    res.render('teacher/inicio', {
        nombre: 'inicio'
    })
 })

 app.get('/teacherPrestamos', requireProfe, (req,res) =>{
    res.render('teacher/prestamos', {
        nombre: 'prestamos'
    })
 })

 app.get('/teacherReservas', requireProfe,(req,res) =>{
    res.render('teacher/reservas', {
        nombre: 'reservas'
    })
 })

 app.get('/teachersanciones', requireProfe,(req,res) =>{
    res.render('teacher/sanciones', {
        nombre: 'sanciones'
    })
 })

 //RUTAS DE LOS ESTUDIANTES
 app.get('/studentInicio', requireEstudiante, (req,res) =>{
    res.render('student/inicio', {
        nombre: 'inicio'
    })
 })

 app.get('/studentPrestamos', requireEstudiante,(req,res) =>{
    res.render('student/prestamos', {
        nombre: 'prestamos'
    })
 })

 app.get('/studentSanciones', requireEstudiante,(req,res) =>{
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


app.get('eror', (req, res) => {
    res.render('401',{
       
    })
})