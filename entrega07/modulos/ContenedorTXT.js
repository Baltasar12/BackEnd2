const fs = require('fs');


class Contenedor{
    constructor(nombreArchivoNuevo){
        this.nombreArchivo = nombreArchivoNuevo;
    }

    async getAll(){
        try{
            //si el archivo no existe lo creo vacio
            if(!fs.existsSync(this.nombreArchivo)){ //Si el archivo No existe 
               await fs.promises.writeFile(this.nombreArchivo,"","utf-8"); //crea el archivo vacio
            }
            //leo el archivo y lo asigno a una variable
            const contenidoArchivo = await fs.promises.readFile(this.nombreArchivo,"utf-8");
            return Promise.resolve(contenidoArchivo.length>0 ? JSON.parse(contenidoArchivo):[]); 
        }
        catch(error){
            Promise.reject(new Error(`Error en el método "getAll": ${error.message}`));
        }        
    }

    async save(object){
        if(object != undefined){ // si el objeto existe
            try{
                const arrayContenidoArchivo = await this.getAll();// array con los objetos del archivo
                let idMasAlto = 0;
                if(arrayContenidoArchivo.length>0){ //si hay datos en el array obtengo el id mas alto
                    idMasAlto =  arrayContenidoArchivo.reduce((acum,proximo)=> acum>proximo.id? acum:proximo.id,0);
                }
                object.id = idMasAlto+1; //agrego el id al nuevo objeto
                arrayContenidoArchivo.push(object); //agrego al array el nuevo objeto con el id asignado
                
                await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(arrayContenidoArchivo),"utf-8"); 
                return Promise.resolve(object.id);
            }
            catch(error){
                Promise.reject(new Error(`Error en el método "save": ${error.message}`));
            }
        }else{
            Promise.reject(new Error(`Error en el método "save": No existe el objeto recibido`));
        }   
    }

    async getById(id){
        try{
            if(id!==undefined && typeof(id) === "number"){ //valido el valor ingresado
                const datosArchivo = await this.getAll(); //obtengo todo el array de objetos del archivo
                const objeto = datosArchivo.find(elemento => elemento.id === id); //busco y obtengo el objeto con el id ingresado
                return objeto===undefined ? Promise.reject(Error(`Error en el método "getById": El id ingresado no existe`)) : Promise.resolve(objeto); //devuelvo el objeto o error no encontrado
            }else{
                Promise.reject(new Error(`Error en el método "getById": El id ingresado es inválido`));
            }
        }
        catch(error){
            Promise.reject(new Error(`Error en el método "getById": ${error.message}`));
        }
    }


    async deleteById(id){
        try{
            if(id!==undefined && typeof(id) === "number"){//valido el valor ingresado
                const datosArchivo = await this.getAll(); //obtengo todo el array de objetos del archivo
                let indice = datosArchivo.findIndex(element=> element.id === id); //busco y obtengo el indice del objeto con el id ingresado
                if(indice>-1){
                    datosArchivo.splice(indice,1); 
                    await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(datosArchivo), "utf-8"); //vuelve a guardar en el archivo el array modificado
                }
                else{ //no se encuentra en el archivo el id que se busca
                    return Promise.reject(Error(`Error en el método "deleteById": El id ingresado no se encontró en el archivo, no se elimina ningún objeto.`));
                }                
            }else{
                Promise.reject(new Error(`Error en el método "deleteById": El id ingresado es inválido`));
            }
        }
        catch(error){
            Promise.reject(new Error(`Error en el método "deleteById": ${error.message}`));
        }
        
    }

    //Elimina todos los objetos del archivo.
    async deleteAll(){
        try{
            await fs.promises.writeFile(this.nombreArchivo,"", "utf-8");
        }
        catch(error){
            Promise.reject(new Error(`Error en el método "deleteAll": ${error.message}`));
        }
    }
}

module.exports = Contenedor;