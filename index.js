
const express = require('express')
const app = express()
const port = 3000

app.get('/', function(request, response) {
	response.send('<h1>Hello World!<h1>')
})

app.get('/user', function(request, response) {
	response.send('user')
})

app.listen(port, function() {
	console.log(`Example app listening on port ${port}!`)
})