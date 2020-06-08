var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const trueLog = require('true-log');
const fs = require('fs');
const config =require('./config');
const readline = require('readline');
const path = require('path');
const mongoose = require('mongoose');
var app = express();


const MongoClient = require('mongodb').MongoClient


const publicrouter = require('./routers/publicrouters');
const privaterouter = require('./routers/privaterouters');
const jobsrouter = require('./routers/jobs.router');
const defultrouter=require('./routers/default.router');



//const authorization = require('./middlewares/middle');
// var cors= require('cors');
// app.use(cors());
// app.options('*', cors());
var cors = require('cors');
var whitelist = [
    'http://localhost:4200',
    
 //   'https://naukari-portal.herokuapp.com'
];

var corsOptions = {
    credentials: true,
    origin: function(origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: 'accept, content-type,Authorization'
};
// app.use(cors({
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId'],
//     'origin': '*',
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false
//   }));
app.use(cors(corsOptions));
app.use(express.static('uploads/'));
app.use(bodyParser.json());
const ws = fs.createWriteStream(path.join(__dirname, "log.txt"), { flags: 'a' });
app.use(trueLog({ level: 'full', stream: ws }));
app.get('/', function (req, res) {
    res.send('Hey!!! Jobs Portal')
  })
app.use('/public', publicrouter);
//app.use(authorization.jwtAuth);
app.use('/private', privaterouter);
app.use('/jobs', jobsrouter);

//app.use('/forgot', indexrouter);

//mongodb://localhost:27017/project


//const dbName = 'project'
//let db

//const url = 'mongodb://127.0.0.1:27017'
    mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (error, res) => {
    if (res) {
        console.log('Mongo Atlas Connected successfully');
    }
    else {
        console.log("Some Error occurred");
    }
});

//MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  //  if (err) return console.log(err)
  
    // Storing a reference to the database so you can use it later
 //   db = client.db(dbName)
 //   console.log(`Connected MongoDB: ${url}`)
 //   console.log(`Database: ${dbName}`)

 // })


const port=process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Server runing on ${port} port`);
})

