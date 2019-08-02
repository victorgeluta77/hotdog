const express = require('express');
const path = require('path');
const Parser = require('body-parser');
const mongoose = require('mongoose');
const hotdogRouter = require('./routers/hotdogRouter');

mongoose.connect('mongodb://localhost:27017/hotdogDBs',{useNewUrlParser: true})

const app = express();

app.use('/public',express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs"); // use engine <ejs>
app.set('views', __dirname + '/views');

app.use('/', hotdogRouter);


    app.listen(3000,(err)=>{
       if(err)console.log('Error server 3000')
       console.log('Listen server 3000...')
})


