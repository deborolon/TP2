import model from "../models/calificaciones.models.js"

const getCalificaciones = async () => {
    const calificaciones = await model.getCalificaciones()
    return calificaciones
}

const postCalificaciones = async (data) => {
    const calificaciones = await model.postCalificaciones(data)
    return calificaciones
}

export default {
    getCalificaciones,
    postCalificaciones
}