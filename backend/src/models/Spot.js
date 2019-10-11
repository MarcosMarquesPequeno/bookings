/**Criando a tabela no Banco de dados */
const mongoose = require ('mongoose'); 

/**Construindo a estrutura  Spot */
const SpotSchema = new mongoose.Schema({
    company: String,
    thumbnail: String,
    price: Number,
    techs: [String],
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'

    }
})

module.exports = mongoose.model('Spot', SpotSchema);/**Criação do modulo Spot */