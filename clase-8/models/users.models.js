// const users = [
//     {
//         id: 1,
//         username: "Lucy099",
//         email: "lucy099@gmail.com",
//         nombre: "Lucy Martinez"
//     },
//     {
//         id: 2,
//         username: "Juanpa001",
//         email: "juanpa001@gmail.com",
//         nombre: "Juan Pablo Fernandez"
//     },
//     {
//         id: 3,
//         username: "Guille789",
//         email: "guille789@gmail.com",
//         nombre: "Guillermo Figueroa"
//     }
// ]

// const getUsers = async () => {
//     //const data = await fetch('https://www.apicondata.com')
//     //const data = await fetch('https://www.apicondata.com').then(res => res.json).then(res => console.log(res))
//     return users
// }

// const getUsersById = async (id) => {
//     const user = users.find((user) => user.id == id)
//     return user
// }

// export default{
//     getUsers,
//     getUsersById
// }

class UsersModel {
  constructor() {
    this.users = [
      {
        id: 1,
        username: "Lucy099",
        email: "lucy099@gmail.com",
        nombre: "Lucy Martinez",
      },
      {
        id: 2,
        username: "Juanpa001",
        email: "juanpa001@gmail.com",
        nombre: "Juan Pablo Fernandez",
      },
      {
        id: 3,
        username: "Guille789",
        email: "guille789@gmail.com",
        nombre: "Guillermo Figueroa",
      },
    ];
  }
  //forma de declarar un método dentro de una clase JS
  getUsers = async () => {
    return this.users;
  };

  getUsersById = async (id) => {
    const user = await this.users.find((user) => user.id == id);
    return user;
  };
}

export default UsersModel;
