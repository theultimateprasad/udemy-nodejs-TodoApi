//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongDB Server');
    }

    console.log('Connected to MongoDB Server');

    const db = client.db('TodoApp')

    db.collection('User').findOneAndUpdate({_id: new ObjectID('5b6ac783d860151b541cd158')},{
       $set: {name:'Sagar'}, $inc:{Age:2},$set: {location:'Chandrapur'},$set: {shop:'Ecc'}
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    })



    //client.close();

});