const express = require('express')
const hbs = require('hbs')
const helps = require('./hbs/helpers/helpers')
const app = express()
const puerto = process.env.PORT || 3000



app.use( express.static( __dirname + '/public'))


//Express hbs
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');



app.get('/', (req,res) =>{
	res.render('home.hbs', {
		nombre: 'daniel',
	})
})
app.get('/about', (req,res) =>{
	res.render('about.hbs', {
		nombre: 'Daniel',
	})
})


app.listen(puerto, ()=> console.log(`Escuchando puerto ${puerto}`))
