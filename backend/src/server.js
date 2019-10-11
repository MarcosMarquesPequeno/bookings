const express = require('express');     /**Importando Express framework */ 
const mongoose = require('mongoose');   /**Importando MongoDB */
const routes = require ('./routes');    /**Importando Rotas */ 
const app = express();  /**Criação do app */
    
    /**Conexão com o Banco   */
mongoose.connect('mongodb+srv://omnistack:omnistack@omnisstack-4ylnk.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); /**È como se fosse um pligun ( modulo ) para express utlizar o formato .json */
app.use(routes); /**routes.js */
 
app.listen(3333); /**Porta onde a Aplicação será executada */