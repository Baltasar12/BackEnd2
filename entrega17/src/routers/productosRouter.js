import { Router } from 'express'
import  * as productosController from '../controllers/productosController.js'


const productosRoutes = new Router();

//GET '/producto' -> devuelve todos los productos
productosRoutes.get('/', productosController.get)
//GET '/producto/:id' -> devuelve un producto según su id.
productosRoutes.get('/:idProducto', productosController.getId)

export default productosRoutes 