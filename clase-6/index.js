import express from "express";

const app = express();
const PORT = 8080;
//Opcional
app.use(express.static("public"));
//REQ PARAMS
app.use(express.urlencoded({ extended: true }));
//REQ BODY
app.use(express.json());

const products = [
  { id: 1, type: "mouse", description: "Logitech X987" },
  { id: 2, type: "mouse", description: "Logitech X012" },
  { id: 3, type: "mouse", description: "Logitech X8888" },
  { id: 4, type: "hub", description: "Anker con USB" },
  { id: 5, type: "hub", description: "Sin puerto USB" },
];

//Obtener productos
app.get("/products", (req, res) => {
  res.send(products);
});

//Obtener productos por id
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((element) => element.id == id);
  res.send(product || "Producto inexistente.");
});

//Crear un nuevo producto con id incremental
app.post("/products", (req, res) => {
  const product = req.body;
  // const getPosition = products.length -1
  // const getId = products[getPosition].id + 1
  product.id = products[products.length - 1].id + 1;
  products.push(product);
  res.send(product);
});

//Modificación de productos completa
app.put("/products/:id", (req, res) => {
    const {id} = req.params
    const product = req.body
    product.id = id
    const index = products.findIndex((e) => e.id == id)
    products.splice(index, 1, product)
    res.send(product)
})

//Modificacion de productos parcial
app.patch("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const index = products.findIndex((e) => e.id == id);
  //Spread operator
  const oldProduct = products[index];
  console.log("oldProduct: ", oldProduct);
  const newProduct = { ...oldProduct, ...product };
  console.log("newProduct: ", newProduct);
  products.splice(index, 1, newProduct);
  res.send("Ok");
});

//Eliminar información
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((e) => e.id == id);
  if (index === -1) throw new Error("El ID no se encuentra en la lista.");
  products.splice(index, 1);
  res.send("El elemento ha sido eliminado.");
});

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:8080`)
);
app.on("eror", (error) => console.log(`Error: ${error}`));
