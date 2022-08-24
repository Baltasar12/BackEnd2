const ContenedorTXT = require("./modulos/ContenedorTXT.js");
const ContenedorMEMORIA = require("./modulos/ContenedorMEMORIA.js");
const ContenedorBD = require("./modulos/ContenedorBD.js");
const knexBDProductos = require("./DB/db_dbproductos");

const productos = [     
    {title:'Escuadra 2', price:123.45, type:'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'},
    {title:'Calculadora 2', price:234.56, type:'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'},
    {title:'Globo Terráqueo 2', price:345.67, type:'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'},                                                                                                                                                
];

//creo funcion para probar ya que await solo es válido en funcion async
function main(){

    const contenedorProductos = new ContenedorBD(knexBDProductos, "productos");

    //creo la tabla
    try{
    }
    catch(error){
        console.log(error.message);
    }    

    //doy de alta algunos productos definidos anteriormente
    try{
        for (const producto of productos) {
        }
    }
    catch(error){
        console.log(error.message);
    }     

    // TESTING DEL getById(Number): Object 
    console.log("\n1- Mostrar el objeto del id 1 (getById(Number): Object )");
    contenedorProductos.getById(1).then(objeto1 => console.log(objeto1)).catch(error=>console.log(error.message)); 
    
}

main();