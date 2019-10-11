/*metodos disponivel dentro de um CONTROLLER 
index, show, store, update, destroy
index   => restorna uma listagem de Session
show    => restorna uma unica Session
store   => criar uma Session
update  => alterar uma Session
destroy => destuir uma Session
*/
const User = require ('../models/User');

module.exports ={
    async store(req, res){
        const {email} = req.body;
        //tratamento para verificar se usuario ja esta cadastrado.
        let user = await User.findOne ({ email });;
        if (!user){
             user = await User.create({ email });
        }
    

        return res.json(user);
    }
};