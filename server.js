// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')
var videos = require('./node/videos.js')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function (req, res) {
	fs.readFile('./index.html', function (err, data) {
		if (err) throw err;
		res.header('Content-Type', 'text/html');
		res.send(data)
	})
})

app.get('/submit', function(req, res){
  fs.readFile('./submit.html', function (err, data) {
  	if (err) throw err;
  	res.header('Content-Type', 'text/html');
  	res.send(data)
  })
});

app.post('/formsubmit', function (req, res) {
	var submittedBy = req.body.submittedBy;
	var url = req.body.url;
	var title = req.body.title
	var desc = req.body.desc
	videos.submissions.addVideo(submittedBy, url, title, desc);
	// fs.writeFile('./data/submissions.json', videos.submissions.stringify(), function() {
	// 	if (err) throw err
		fs.readFile('./index.html', function (err, data) {
			if (err) throw err;
			var submittedBy = req.body.submittedBy;
			var url = req.body.url;
			var title = req.body.title
			var desc = req.body.desc
			videos.submissions.addVideo(submittedBy, url, title, desc);
			res.header('Content-Type', 'text/html');
			res.send(data)

			fs.writeFile('./data/submissions.json', videos.submissions.stringify(), function() {})
		})
	// })
})

app.get('/submitted-videos', function (req, res) {
	fs.readFile('./data/submissions.json', function (err, data) {
		if (err) throw err;
		res.header('Content-Type', 'application/json');
		res.send(data)
	})
})

app.post('/viewvideos', function (req, res) {

})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})