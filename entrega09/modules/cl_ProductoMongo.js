const { MongoClient, ObjectId } = require ('mongodb');
const { faker } = require("@faker-js/faker");

const mongo_url = 'mongodb+srv://balta_sar:Jf4yc8iAkujCNv5s@cluster0.zly7w.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(mongo_url, { serverSelectionTimeOutMS: 5000 });
//await client.connect();
client.connect();

//Clase de productos para Base de datos 
class cl_Producto {

    constructor (){
        this.collection = client.db("coderhouse").collection("productos")
    }

     //devuelve todos los productos
    async getProductos() {
        try{
            const array = await this.collection.find().toArray()
            return array
        }
        catch(error){
            console.error(`${error}`);
        }
      }

    
    async addProductosAleatorios () {

        try{
            let nombre 
            let precio 
            let foto 
            let producto

            //genero datos aleatorios y lo voy agregando uno x uno 
            for (let i = 0; i < 5; i++) {
            nombre = faker.name.firstName();
            precio = faker.finance.amount(); //amount(0,20,0) o sea que va del 0 al 20 y no tiene decimales
            foto = faker.image.avatar();
            producto = {
                    id: i,
                    title: nombre,
                    price: precio,
                    thumbnail: foto,
                }
            // Guardar en BD
            await this.collection.insertOne(producto);
            }
            console.log("Los 5 productos aleatorios fueron agregados con éxito en la base de datos MONGO")
        }
        catch(error){
            console.error(`${error}`);
        }
    }

}




module.exports = cl_Producto;