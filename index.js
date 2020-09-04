const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();

// request (petición) -> |middleware| -> response (respuesta)

//__dirname es una variable global dentro del contexto de node que nos regresa la ruta en la cual nos encontramos actualmente

app.use(express.static('public')); 
//Middleware para servir archivos estaticos sobre el directorio public

//Middlewares que atienden a peticiones de tipo HTTP GET
app.get('/', (request, response) => {
    // response.sendFile(__dirname+'/index.html');
    // response.sendFile("index.html", { root: __dirname});
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/nosotros', (request, response) => {
    response.send('Esta es la página acerca de nosotros');
});

app.get('/contacto', (request, response) => {
    response.send('Esta es la página de contacto');
});

app.get('/revelar-contrasenas', (request, response) => {
    response.send(process.env.CLAVE_SECRETA_API);
})

app.get('/hola', (request, response) => {
    response.send('Esta es una página de prueba');
});

//Middleware que actue sobre cualquier tipo de petición HTTP (GET, POST, DELETE, PUT)
app.use((request, response) => {
    response.send('<h1>404</h1>');
});

app.listen(8000, () => {
    console.log("Servidor iniciado en el puerto 8000");
});