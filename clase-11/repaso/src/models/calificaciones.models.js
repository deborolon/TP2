const calificaciones = [
    {
        id: "1",
        nombre: "Pepe",
        nota: 10,
        curso: "1A"
    },
    {
        id: "2",
        nombre: "Rosa",
        nota: 10,
        curso: "2A"
    }
]

const getCalificaciones = async () => {
    return calificaciones
}

const getPromedioCalificaciones = async () => {
    const sumaTotal = calificaciones.reduce((acc, nota) => acc + nota.nota, 0)
    return sumaTotal / calificaciones.length
}

const postCalificaciones = async (data) => {
    console.log('DATA: ', data)
    data.id = calificaciones.length + 1;
    await calificaciones.push(data)
    return data
}

const modificarCalificaciones = async (id, data) => {
    data.id = id
    const index = calificaciones.findIndex((e) => e.id == id)
    calificaciones.splice(index, 1, data)
    return data
}

const borrarCalificaciones = async (id) => {
    const index = calificaciones.findIndex((e) => e.id == id)
    if (index === -1){
        throw new Error("El ID no existe!!!")
    } else{
        calificaciones.splice(index, 1)
        return "Ok."
    }
}

export default {
    getCalificaciones,
    getPromedioCalificaciones,
    postCalificaciones,
    modificarCalificaciones,
    borrarCalificaciones
}