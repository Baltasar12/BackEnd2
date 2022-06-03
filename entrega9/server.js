// De donde saque info para hacer este ejercicio.
//https://www.youtube.com/watch?v=ppiAvvkvAz0

const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const { engine } = require("express-handlebars");

const productosRouter = require('./routes/productos');
const mensajesRouter = require('./routes/mensajes');

app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/productos', productosRouter);
app.use('/api/mensajes', mensajesRouter);


//*******************************************************
// MOTOR DE PLANTILLA 
app.engine(
    "hbs",  
    engine({ //engine viene del nombre como lo importe  const { engine } = require("express-handlebars");
      extname: ".hbs", // extension de los archivos, si no ponemos por defecto va ser .handlebars
      defaultLayout: "layout.hbs",
      layoutsDir: __dirname + "/views/layouts", 
      partialsDir: __dirname + "/views/partials", 
    })
  );
app.set("views", "./views"); 
app.set("view engine", "hbs");
//*******************************************************

// Esta ruta carga nuestro archivo index.html en la raíz de la misma
const cl_Producto = require("./modules/cl_Producto"); 
const cl_ProductoMongo = require("./modules/cl_ProductoMongo"); 
const Producto = new cl_Producto();
const ProductoMongo = new cl_ProductoMongo();
let listaProductos = []
let listaProductosMongo = []
listaProductos = Producto.getProductos();

async function obtenerListadoProductosMongo () {
   try{
     return await ProductoMongo.getProductos();
   }
   catch(error){
       console.error(`${error}`);
   }
 }
listaProductosMongo = obtenerListadoProductosMongo(); 

console.log(listaProductos)
console.log(listaProductosMongo)
const date = new Date();
const listaMensajes = [{
  email:"Admin",
  fecha: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
  mensaje: "Bienvenido al chat!!"
}]

app.get('/', (req, res) => { 
  res.render("body", {listadoProducto: listaProductos,  listadoExiste: true});
})


io.on('connection', socket => {
    
    console.log('¡Nuevo Cliente conectado!')
    
    socket.emit('msgTodosProductos', listaProductos ) 
    socket.emit('msgTodosMensajesCHAT', listaMensajes ) 


    socket.on('msgNuevoProducto', data => {  
      console.log("io.on sockek.on msgNuevoProducto: inicio (server.js):")
      console.log("io.on sockek.on msgNuevoProducto: rtaPosData y listadoProductos")
      console.log(data);      
      if (data.status != "ok"){
        console.log("estado no OK: no agrego el producto")
      }else{
        console.log("estado OK: agregó el producto")
      } 
      console.log(listaProductos);
      io.sockets.emit('msgTodosProductos', listaProductos);
    })

    socket.on('nuevoMensajeCHAT', data => {
      console.log("io.on sockek.on nuevoMensajeCHAT: inicio (server.js):")
      console.log(data); 
      listaMensajes.push(data);
      console.log(listaMensajes);
      io.sockets.emit("msgTodosMensajesCHAT", listaMensajes);
    })
   
})

// El servidor funcionando en el puerto 8080
httpServer.listen(8080, () => console.log('SERVER ON'))