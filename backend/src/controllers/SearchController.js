const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArrays');
module.exports = {
    async index(request, response) {
        console.log(request.query)
        // Buscar todos devs num raio 10km
        // Filtrar por tecnologias
        const { latitude, longitude, techs } = request.query
        const techsArrays = parseStringAsArray(techs, ",");
        console.log(techsArrays)
        const devs = await Dev.find({
            techs: {
                $in: techsArrays
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },


        });
        return response.json({ devs })
    }
}