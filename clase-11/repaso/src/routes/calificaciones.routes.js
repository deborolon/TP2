import express from 'express'
import controller from '../controllers/calificaciones.controller.js'

const router = express.Router()

//Todas las notas
router.get("/calificaciones", controller.getCalificaciones)
//Promedio
router.get("/calificaciones/promedio", controller.getPromedioCalificaciones)
router.post("/calificaciones", controller.postCalificaciones)
router.put("/calificaciones/modificar/:id", controller.modificarCalificaciones)
router.delete("/calificaciones/borrar/:id", controller.borrarCalificaciones)

export default router