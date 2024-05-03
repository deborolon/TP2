import services from '../services/products.service.js'
//El controlador se encarga del manejo del objeto de requerimiento y del objeto de respuesta
//REQ => requerimiento
//RES => respuesta
//REQ => por ejemplo: req.id, req.name => via URL
//REQ => por ejemplo: req.body => si estamos haciendo un post/put/patch enviando info por body

const getProducts = (req, res) =>{
    const products = services.getProducts()
    //solo enviamos el "res" (respuesta) desde el controlador, el resto de las capas desconoce el res
    res.send(products);
}

const getProductsById = (req, res) =>{
    const {id} = req.params //necesitamos el id para filtrar productos que viaja en el objeto de requerimiento(REQ)
    const productById = services.getProductsById(id)
    res.send(productById);
}

export default {
    getProducts,
    getProductsById
}