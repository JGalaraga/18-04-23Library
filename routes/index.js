const express = require('express');
const loginController  = require('../controllers/login/login');

const router = express.Router();

const {postUsuario, requireAdmin, requireProfe, requireEstudiante} = require('../controllers/login/login')

router.post('/', postUsuario);




module.exports = router;