// import model from '../models/users.models.js'
import UsersModel from "../models/users.models.js";

// const getUsers = async () => {
//     const users = await model.getUsers()
//     return users
// }

// const getUsersById = async (id) => {
//     const user = await model.getUsersById(id)
//     return user
// }

// export default {
//     getUsers,
//     getUsersById
// }

class UsersServices {
  constructor() {
    //inicializar "new" para acceder a sus métodos
    this.model = new UsersModel();
  }

  getUsers = async () => {
    const users = await this.model.getUsers();
    return users;
  };

  getUsersById = async (id) => {
    const user = await this.model.getUsersById(id);
    return user;
  };
}

export default UsersServices;
