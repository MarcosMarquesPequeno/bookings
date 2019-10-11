/**Todas as rotas do backend estão aqui */
const express = require('express');
const multer = require('multer');
const uploadConfig  = require ('./config/upload');

/**Importado caminho dos arquivos para as variaveis */
const SessionController = require ('./controllers/SessionController');
const SpotController = require ('./controllers/SpotController');
const DashboardController = require ('./controllers/DashboardController');
const BookingController = require ('./controllers/BookingController');

/**Defenindo o roteador express Router() para a variavel routes
 * Defenindo o  multer(uploadConfig) para a variavel upload*/
const routes = express.Router(); 
const upload = multer(uploadConfig);

/**Rota de Controle como seria */
routes.post('/sessions',SessionController.store);
routes.get('/spots', SpotController.index); 
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;
