class Contenedor{
    static #arrProductos = [
        {
            id: 1,
            title: "Escuadra",
            price: 200,
            type: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        },
        {
            id: 2,
            title: "Calculadora",
            price: 150,
            type: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
        },
        {
            id: 3,
            title: "Globo Terráqueo",
            price: 400,
            type: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
        },
    ];

    #getMaxId(){
        return Contenedor.#arrProductos.length === 0 ? 0 : Contenedor.#arrProductos.reduce((acum,proximo)=> acum>proximo.id? acum:proximo.id,0);
    }

    async getAll(){
        return  Contenedor.#arrProductos.length === 0 ? null : Contenedor.#arrProductos;    
    }

    async save(object){
        if(object.title != undefined && 
            (object.price != undefined && parseInt(object.price) != NaN) && 
            (object.type != undefined && object.type != "")){

            let id = this.#getMaxId(); //obtengo el máximo id del array de productos
            id++; //sumo en 1 para asginar al nuevo producto            
            object.id = id; //asigno id al nuevo producto
            
            //armo el objetoProducto a agregar y devolver con el nuevo id asignado
            let objProductoOUT =  {   
                id:object.id,
                title:object.title,
                price:object.price,
                type:object.type,
            };
            Contenedor.#arrProductos.push(objProductoOUT); // lo agrego a mi arrayProductos
    
            return objProductoOUT.id; 
        }else{
            return null;
        }
    }


    async getById(id){
        return id != undefined && typeof(id) === "number" ? Contenedor.#arrProductos.find(producto=> producto.id === id): null;
    }

    async deleteById(id){

        if(id != undefined && typeof(id) === "number"){
            //obtengo la posicion en el arrayProductos del id producto ingresado como parametro
            let posicion = Contenedor.#arrProductos.findIndex(element=> element.id === id);
            
            if( posicion > -1){
                Contenedor.#arrProductos.splice(posicion,1);
                return true; // retorno OK la eliminacion
            }
        }
        return false; 
    }

    async deleteAll(){
        Contenedor.#arrProductos = [];
    }
}

module.exports = Contenedor;