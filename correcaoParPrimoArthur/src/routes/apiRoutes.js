//Importa o módulo Router do express
//Router será utilizada para definir rotas específicas
const router = require('express').Router();

const controllerNumbers = require('../controllers/controllerNumbers'); // esse .. significa que estou voltando uma pasta(cd ..)

router.post('/par/', controllerNumbers.checkPar); // http://localhost:5000/arthurparprimo/par <-- esse /par é um endpoint 
router.post('/primo/', controllerNumbers.checkPrimo); // http://localhost:5000/arthurparprimo/primo

module.exports = router
