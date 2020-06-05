'use strict'

const http = require ('http')

http.createServer((req, res) =>{
	res.writeHead(200, {'content-type' : 'application/JSON' })


	let salida = {
		nombre: 'Daniel Acero',
		cargo: 'Desarrollador node.js',
		req : req.url
	}
	res.write(JSON.stringify(salida))
	res.end()
})
	.listen(8080)

console.log(`Escuchando el puerto 8080`)