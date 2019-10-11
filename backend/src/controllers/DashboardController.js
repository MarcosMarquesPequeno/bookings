const Spot =require ('../models/Spot');

module.exports ={
   async show(req, res){
        const {user_id} = req.headers;// user_id do cabeçãlho

        const spots = await Spot.find({user : user_id}); // compara campo user == campo user_id no banco 

        return res.json(spots);
    }
} // error