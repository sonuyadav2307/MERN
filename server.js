const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
//new module path
const path = require('path')
const items = require('./routes/api/items')
const app = express();

//bodyparser middleware
// app.use(bodyParse.json())
app.use(express.json())

//DB config
const db = require('./config/keys').mongoURI

//Connect to mongo
mongoose
    .connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('mongodb connected...'))
    .catch(err => console.log(err))
//use routes
app.use('/api/items',items);

//new code for diployemnet
//Server Static assets if in production
if(process.env.NODE_ENV === 'production'){
    //Set Static folder

    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    });
}

    const port = process.env.PORT || 5000;

    app.listen(port,()=> console.log(`server started on ${port}`))