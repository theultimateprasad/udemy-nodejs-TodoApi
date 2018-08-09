const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text : req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
    
});


// var todo = new Todo({
//     text:'some text here'
// });

// todo.save().then((doc)=>{
// console.log('document saved',doc);
// });

app.listen(3000,()=>{
    console.log('Server is up and running');
})


