// import services from '../services/users.services.js'
import UsersServices from "../services/users.services.js";
//maneja el req y el res (solicitud y respuesta)
// const getUsers = async (req, res) => {
//     const users = await services.getUsers()
//     res.send(users)
// }

// const getUsersById = async (req, res) => {
//     //params puede ser un objeto con muchos datos, las { } nos traen la info necesaria
//     try {
//         //evaluar si el id existe o no
//         const {id} = req.params
//         //si modificamos el nombre de la funcion por uno incorrecto da el error
//         const user = await services.getUsersById(id)
//         res.send(user)
//     } catch (error) {
//         console.log('Error')
//         res.send({statusCode: 401, message: "No está autorizado."})
//     }
// }

// export default {
//     getUsers,
//     getUsersById
// }

class UsersController {
  constructor() {
    this.services = new UsersServices();
  }
  //fuera del scope del constructor declaro los métodos de la clase (funciones)
  getUsers = async (req, res) => {
    const users = await this.services.getUsers();
    res.send(users);
  };

  getUsersById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.services.getUsersById(id);
      res.send(user);
    } catch (error) {
      console.log("Error");
      res.send({ statusCode: 401, message: "No está autorizado." });
    }
  };
}

export default UsersController;
