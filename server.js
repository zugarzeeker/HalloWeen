var express = require('express')
var app = express()
var port = 8888

var value = 'stop';

app.use(function (request, response, next) {
	response.header('Access-Control-Allow-Origin', '*')
	response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})

app.get('/', function (request, response) {
	response.send('Server Haloween Ready');
})

app.get('/read', function (request, response) {
	response.send(value);
	console.log('[Read] value : ' + value);
})


app.get('/write/:value', function(request, response) {
	value = request.params.value
	response.send('value : ' + value);
	console.log('[Write] value : ' + value);
});

app.listen(port, function () {
  console.log('Listening on port ' + port)
})
