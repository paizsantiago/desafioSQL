const { options } = require("../options/sqlite");
const knex = require("knex")(options);

knex.schema
.createTable("mensajes", (table) => {
    table.increments("id"), table.string("email"), table.integer("contenido"), table.string("fecha");
})
.then(() => {
    console.log("Se creo la tabla mensajes");
})
.catch((err) => {
    console.log(err);
    throw new Error(err);
})
.finally(() => {
    knex.destroy();
});