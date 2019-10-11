/**Criando a tabela no Banco de dados */
const mongoose = require ('mongoose'); 

/**Construindo a estrutura Booking 
 * Existem dois relacionamentos dentro do Booking (user, spot)
 *booking precisa saber qual user esta logado para puxar
 * todas as suas reservar e techs de interece.
*/
 
const BookingSchema = new mongoose.Schema({
    date : String,
    opproved: Boolean,
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'

    },
    spot : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Spot'

    }
})

module.exports = mongoose.model('Booking', BookingSchema);/**Criação do modulo Booking (reserva). */  