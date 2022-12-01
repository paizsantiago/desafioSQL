//https://socket.io/docs/v4/server-initialization/
const express = require("express");
const ContenedorProductos = require('./contenedores/contenedorProductos');
const ContenedorMensajes = require('./contenedores/contenedorMensajes');
const contenedorProductos = new ContenedorProductos();
const contenedorMensajes = new ContenedorMensajes();

const app = express();

//IMPLEMENTACION
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

httpServer.listen(8080, () => console.log("SERVER ON http://localhost:" + 8080));

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile( __dirname + "/index.html" );
});

io.on("connection", (socket) => {
  //atajo los mensajes
  socket.on("msg", async (data)=>{
    contenedorMensajes.save(data)
    const listMensajes = await contenedorMensajes.getAll();
    console.log(listMensajes);
    io.sockets.emit("msg-list", listMensajes);
  })

  socket.on("product", async (data)=>{
    contenedorProductos.save(data);
    const listProducts = await contenedorProductos.getAll();
    io.sockets.emit("product-list", listProducts);
  })

})




