const socket = io();
socket.on("connect", () => {
});

socket.on("msg-list", async (data) => {
  let html = '';
  await data.forEach(item => {
    html +=  item.email + ": " + "[" + item.fecha + "]" + ' : ' + item.contenido + '<br><br>';
  });
  document.getElementById('msg-list-div').innerHTML = html;
});

socket.on("product-list", async (data) => {
  let html = '';
  await data.forEach(item => {
    html +=  `Nombre de producto: ${item.titulo}, precio: ${item.precio} <img class="img-producto" src=${item.thumbnail}> <br><br>` 
  });
  document.getElementById('product-list-div').innerHTML = html;
});

const enviarMsg = () => {
  const today = new Date();
  const now = today.toLocaleString();
  const msgParaEnviar = document.getElementById("input-msg").value;
  const emailUser = document.getElementById("emailUser").value;
  const newMsg = {email: emailUser, contenido: msgParaEnviar, fecha: now}
  socket.emit("msg", newMsg);
};

const enviarProducto = () =>{
  const titulo = document.getElementById("titulo").value;
  const precio = document.getElementById("precio").value;
  const thumbnail = document.getElementById("thumbnail").value;
  const newProduct = {titulo: titulo, precio: precio, thumbnail: thumbnail};
  socket.emit('product', newProduct);
}
