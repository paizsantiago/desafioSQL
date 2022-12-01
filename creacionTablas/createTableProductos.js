const { options } = require("../options/mysql");
const knex = require("knex")(options);

knex.schema
  .createTable("productos", (table) => {
    table.increments("id"), table.string("titulo"), table.integer("precio"), table.string("thumbnail");
  })
  .then(() => {
    console.log("Se creo la tabla productos");
  })
  .catch((err) => {
    console.log(err);
    throw new Error(err);
  })
  .finally(() => {
    knex.destroy();
  });

