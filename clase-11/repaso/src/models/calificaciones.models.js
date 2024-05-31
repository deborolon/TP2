const calificaciones = [
    {
        nombre: "Pepe",
        nota: 10,
        curso: "1A"
    },
    {
        nombre: "Rosa",
        nota: 10,
        curso: "2A"
    }
]

const getCalificaciones = async () => {
    return calificaciones
}

const postCalificaciones = async (data) => {
    const nuevaCalificacion = await calificaciones.push(data)
    return data
}

export default {
    getCalificaciones,
    postCalificaciones
}