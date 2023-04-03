class ProductManager {
    
constructor(){
    this.products = []
    this.index = 0
}
getProducts = () => {
    console.log(this.products)
    return this.products
}

addProduct = (title , description , price , thumbnail , code , stock) => {
    this.index++
    const id = this.index
    const product = {title , description , price , thumbnail , code , stock , id}
    if ( !title || !description || !price || !thumbnail || !code || !stock || !id){
        return console.log("faltan datos")
    }
    if (this.products.find(prod => prod.code === product.code)){
        return console.log("El codigo ingresado ya pertenece a un producto cargado");
    }
    this.products.push(product)    
    }

getProductsById = (findId) => {
    if (this.products.find(prod => prod.id === findId)) {
        console.log("El Producto Buscado es:")
        return console.log(this.products.find(prod => prod.id === findId)) 
    }else{
        console.log("Not found");
    }
    
}
}

const manager = new ProductManager()
manager.addProduct( 'PC' , 'Samsung i5' , 1500 , 'foto' , 101 , 5 )
manager.addProduct( 'Celular' , 'Nokia' , 900 , 'foto' , 102 , 15 )
manager.addProduct( 'Tablet' , 'Asus' , 600 , 'foto' , 103 , 8 )
manager.addProduct( 'TV' , 'LG 40"' , 700 , 'foto' , 104 , 9 )
manager.getProducts()
manager.getProductsById(2)


