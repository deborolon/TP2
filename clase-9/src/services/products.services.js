import ModelFactory from "../models/DAO/Factory.js";
import config from "../../config.js";

class ProductsServices {
    constructor() {
      this.model = ModelFactory.get(config.PERSISTENCE);
    }
  
    getProducts = async () => {
      const products = await this.model.getProducts();
      return products;
    };
  
    getProductsById = async (id) => {
      const product = await this.model.getProductsById(id);
      return product;
    };

    newProduct = async (prod) => {
      const product = await this.model.newProduct(prod);
      return product;
    };
  }
  
  export default ProductsServices;