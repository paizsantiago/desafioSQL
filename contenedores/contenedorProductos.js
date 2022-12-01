
const { options } = require("../options/mysql");
const knex = require("knex")(options);

class ContenedorProductos {
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo;
    }

    save = (objeto) =>{
        try {   
            knex("productos").insert(objeto)
            .then(()=>{
                console.log("Producto ingresado con exito");
            })
            .catch((err)=>{
                console.log(err);
            })
            // .finally(()=>{
            //     knex.destroy();
            // });
        } catch (error) {
            console.log("Error");
        }
    }

    getAll = async () => {
        try {   
           let data = await knex.from("productos")
            .select("*")
            .then((res)=>res)
            .catch((err)=>{
                console.log(err);
            })
            // .finally(()=>{
            //     knex.destroy();
            // });
            return data;
        } catch (error) {
            console.log("Error");
        }
    };
    
}

module.exports = ContenedorProductos;

