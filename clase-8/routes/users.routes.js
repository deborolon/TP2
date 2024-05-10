import express from "express";
// import controller from '../controllers/users.controllers.js'
import UsersController from "../controllers/users.controllers.js";
//trabajar con los endpoints
// const router = express.Router()

//declaración de rutas
// router.get('/users', controller.getUsers)
// router.get('/users/:id', controller.getUsersById) //get por id
// router.post('/users')

// export default router

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new UsersController();
  }

  //le digo a Express que ejecute esos métodos
  start() {
    this.router.get("/users", this.controller.getUsers);
    this.router.get("/users/:id", this.controller.getUsersById);

    //FIX ERROR: faltaba el return del router!!!
    return this.router;
  }
}

export default Router;
