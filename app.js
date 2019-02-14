
const http = require('http');

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-type' : 'application/json'});
    let salida = {
        nombre : 'Andrea',
        apellido : 'Jimenez',
        edad : 21,
        url : req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);

console.log('Escuchando puerto 8080');