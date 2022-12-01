const { options } = require("../options/sqlite");
const knex = require("knex")(options);

class ContenedorMensajes {
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo;
    }

    save = (objeto) =>{
        try {   
            knex("mensajes").insert(objeto)
            .then(()=>{
                console.log("Mensaje ingresado con exito");
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
           let data = await knex.from("mensajes")
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

module.exports = ContenedorMensajes;

