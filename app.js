const express = require( 'express' );
const hbs = require( 'hbs' );
require('dotenv').config(); //se usa para obtener variables de .env

const app = express();
const port = process.env.PORT;


// Handlebar ruta usada para handlersbar (renderizar), se necesita estructura MVC
app.set( 'view engine', 'hbs' );
hbs.registerPartials( __dirname + '/views/partials' );


// Servir contenido estático. Hace uso de la vista public/index.html 
// app.use( express.static( 'public' ) ); //esta ruta está reemplzando al '/'
app.use( express.static( 'public/templated-roadtrip' ) ); //esta ruta está reemplzando al '/'


// app.get( '/', ( req, res ) => {
//     res.send( 'Home page' )
// });


// usando el hbs
app.get( '/', ( req, res ) => {
    res.render('home', {
        nombre : 'Altair',
        titulo : 'Assassin\' Creed'
    })
});


// app.get( '/elements', ( req, res ) => {
//     res.sendFile( __dirname + '/public/templated-roadtrip/elements.html')
// });

app.get( '/elements', ( req, res ) => {
    res.render('elements', {
        nombre : 'Aveline', 
        titulo : 'Assassin\' Creed III'
    })
});


app.get( '/generic', ( req, res ) => {
    res.render( 'generic', {
        nombre : 'Ezio',
        titulo : 'Assassin\' Creed II'
    }) 
});

// app.get( '/generic', ( req, res ) => {
//     res.sendFile( __dirname + '/public/templated-roadtrip/generic.html')
// });

app.get( '/info', ( req, res ) => {
    res.send( 'Respuesta desde la página info' )
});

app.get( '*', ( req, res ) => { // "*" es un comodin 
    res.sendFile( __dirname + '/public/404.html' )
});

app.listen( port, () => {
    console.log( `El ejemplo de app está escuchando por http://localhost:${port}` )
} )