import ProductsServices from "../services/products.service.js";

class ProductsController {
    constructor() {
      this.services = new ProductsServices();
    }

    getProducts = async (req, res) => {
      const products = await this.services.getProducts();
      res.send(products);
    };
  
    getProductsById = async (req, res) => {

    };

    pushProduct = async (req, res) => {

    };
}
  
  export default ProductsController;