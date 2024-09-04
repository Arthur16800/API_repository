// Importa o módulo Router do express 
// Router será utilizado para definir rotas específicas da aplicação
const router = require('express').Router();

const controllerNumbers = require('../controllers/controllerNumbers');

// Importa a controller onde contém a lógica relaciada a professores
const teacherController = require('../controllers/teacherController');

// Rota Post para teacher 

router.post('/teacher/', teacherController.postTeacher);
router.get('/teacher/', teacherController.getTeacher);

// Rota post numbers

router.post('/numbers/', controllerNumbers.checkPar);
router.post('/numbersPrimos/', controllerNumbers.checkPrimo);


module.exports = router;
