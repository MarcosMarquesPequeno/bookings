/**Criando a tabela no Banco de dados */
const mongoose = require ('mongoose');

 /**Construindo a estrutura  User */
const UserSchema = new mongoose.Schema({ 
    email : String,
})

module.exports = mongoose.model('User', UserSchema); /**Criação do modulo User */