const db = require("../../database/models");
const sequelize = db.sequelize;

module.exports = {
    list: async(req, res) => {

        try {
            const genres = await db.Genre.findAll()

            return res.status(200).json({
                ok : true,
                data : genres,
                meta : {
                    status: 200,
                    total : genres.lenght, // Siempre usar la misma estructura en la misma api
                    url : "/api/genres"
                },
            })

        } catch (error) {
            console.log(error); //SIEMPRE muestro por consola el error
            return res.status(500).json({
                msg : error.message //Es buena practica mostrar el mensaje de error para que salga en el front
            })
        }

    },
    detail: async (req, res) => {

        try {

            const {id} = req.params;

            const genre = await db.Genre.findByPk(id);

            return res.status(200).json({
                ok : true,
                data : genre,
                meta : {
                    status: 200,
                    total : 1,  // Siempre usar la misma estructura en la misma api
                    url : `/api/genres/${id}`
                },
            })

        } catch (error) {
            console.log(error); //SIEMPRE muestro por consola el error
            return res.status(500).json({
                msg : error.message //Es buena practica mostrar el mensaje de error para que salga en el front
            })
        }
    },

    store : async (req, res) => {

    },

    update : async (req, res) => {

    },

    destroy : async (req, res) => {

    },
};
