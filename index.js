const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');


//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb+srv://riddhidhawan:Riddhi010@@cluster0.myvbj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.Promise=global.Promise;



app.use(bodyParser.json())
//initializing the routes
app.use('/api',routes);
s
app.use(function(err,req,res,next){
    res.status(422).send({error:err._message});
});

//listen for request
app.listen(3000,function(){
    console.log('listening for requests');

});