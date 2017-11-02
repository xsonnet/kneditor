var express = require('express');
var multer  = require('multer');

var bodyParser = require('body-parser');
var path = require('path');

var upload = multer({ dest: './upload/' });
var app = express();

app.listen(3327);
app.engine('html', require('express-art-template'));
app.use(express.static(path.join(__dirname, './')));
app.use(bodyParser.urlencoded({extended: true, limit: '10mb'}));
console.log('waiting for uploading');

app.get('/', (req, res) => {
	res.render('index');
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.send(req.file ? req.file.path : '');
});