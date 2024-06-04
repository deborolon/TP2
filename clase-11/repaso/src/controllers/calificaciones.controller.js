import service from "../services/calificaciones.services.js"

const getCalificaciones = async (req, res) => {
    const calificaciones = await service.getCalificaciones()
    res.send(calificaciones)
}

const getPromedioCalificaciones = async (req, res) => {
    const calificaciones = await service.getPromedioCalificaciones()
    //Convertimos el number
    res.json(calificaciones)
}

const postCalificaciones = async (req, res) => {
    const nuevaCalificacion = req.body
    const calificaciones = await service.postCalificaciones(nuevaCalificacion)
    res.send(calificaciones)
}

const modificarCalificaciones = async (req, res) => {
    const { id } = req.params
    const actualizacionCalificacion = req.body
    const calificaciones = await service.modificarCalificaciones(id, actualizacionCalificacion)
    res.send(calificaciones)
}

const borrarCalificaciones = async (req, res) => {
    const { id } = req.params
    const calificaciones = await service.borrarCalificaciones(id)
    res.send(calificaciones)
}


export default {
    getCalificaciones,
    getPromedioCalificaciones,
    postCalificaciones,
    modificarCalificaciones,
    borrarCalificaciones
}

//Otra forma de declarar funciones
// function getCalificaciones (){
// }
// getCalificaciones()