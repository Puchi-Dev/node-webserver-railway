const http = require( 'http' );

http.createServer( ( request, response ) => {

    response.write( 'Soy la respuesta desde el createServer' )
    response.end();
})
.listen( 8000 );

console.log( 'Escuchando por el puerto', 8000 );