class ProductsModelMemory {
    constructor() {
      this.products = [
        {
          id: 1,
          nombre: "Monitor",
        },
        {
          id: 2,
          nombre: "Teclado",
        },
        {
          id: 3,
          nombre: "Mouse",
        },
      ];
    }

    getProducts = async () => {
      return this.products;
    };
  
    getProductsById = async (id) => {
      const product = await this.products.find((prod) => prod.id == id);
      return product;
    };

    newProduct = async (prod) => {
      const data = await this.products.push(prod)
      return prod;
    };
  }
  
  export default ProductsModelMemory;