const multer = require ('multer');
const path = require ('path');


module.exports = {
    storage: multer.diskStorage ({
        destination: path.resolve (__dirname,'..', '..', 'uploads'),

        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname); //tratamento para mudar o nome da figura
            const name = path.basename(file.originalname, ext);

    cb(null, `${name}-${Date.now()}${ext}`); // name, ext passado como paramentro
        }
    })
};   