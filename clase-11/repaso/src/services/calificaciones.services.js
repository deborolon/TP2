import model from "../models/calificaciones.models.js"

const getCalificaciones = async () => {
    const calificaciones = await model.getCalificaciones()
    return calificaciones
}

const getPromedioCalificaciones = async () => {
    const calificaciones = await model.getPromedioCalificaciones()
    return calificaciones
}

const postCalificaciones = async (data) => {
    const calificaciones = await model.postCalificaciones(data)
    return calificaciones
}

const modificarCalificaciones = async (id, data) => {
    const calificaciones = await model.modificarCalificaciones(id, data)
    return calificaciones
}

const borrarCalificaciones = async (id) => {
    const calificaciones = await model.borrarCalificaciones(id)
    return calificaciones
}

export default {
    getCalificaciones,
    postCalificaciones,
    getPromedioCalificaciones,
    modificarCalificaciones,
    borrarCalificaciones
}