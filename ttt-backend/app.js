//Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var applicationRoutes = require('./routes/applicationRoutes');
var fs = require('fs');
//Constants
const PORT = 3000;


//Configure Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//Use External Routes
app.use('/ttt', applicationRoutes);

//Start the Server
app.listen(PORT, function() {
    console.log('Server Started at PORT: ' + PORT);
});