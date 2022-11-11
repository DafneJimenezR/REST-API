const express = require("express");
const app = express();
const morgan = require("morgan");

const path = require('path');



// Configuraciones
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/',function(req,res){
 // res.sendFile(path.join(__dirname+'/html/index.html'));
// file:///C:/Users/Dafne/Documents/FORK_projects/REST-API/ApiNodeJsExpress/src/html/index.html
res.sendFile(path.join(__dirname+'/html/index.html'));

});

let usuario = {
  nombre: '',
  apellido: '',
  direccion: '',
  telefono: '',
  id: ''
};


app.get('/crearEntrada',function(req,res){
  res.sendFile(path.join(__dirname+'/html/form.html'));

});

app.post('/envioDeDatos', function (req, res) {
  usuario.nombre = req.body.nombre;
  usuario.apellido = req.body.apellido;
  usuario.direccion = req.body.direccion;
  usuario.telefono = req.body.telefono;
  usuario.id = req.body.id;
  res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.get('/consultarDatos', function (req, res) {
  if (usuario.nombre !== '' && usuario.apellido !== '' && usuario.direccion !== '' && usuario.telefono !== ''  && usuario.id !== '' ){
     res.json(usuario);
  } else {
     res.send("Datos no ingresado");
  }
});

app.get('/eliminarDatos', function (req, res) {
  if (usuario.nombre !== '' && usuario.apellido !== '' && usuario.direccion !== '' && usuario.telefono !== ''  && usuario.id !== '') {
     usuario.nombre = '';
     usuario.apellido = '';
     usuario.direccion = '';
     usuario.telefono = '';
     usuario.id = '';
     res.sendFile(path.join(__dirname + '/html/delete.html'));
  } else {
     res.send("Datos no ingresado");
  }
});




//Primer WS GET
// app.get("/", (req, res) => {
//   res.json({
//     "Title": "Hola Mundoccccccc",
//   });
// });

//Routes
app.use(require('./routes/index.js'));

//Iniciando el servidor, escuchando...
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});