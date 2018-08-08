//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongDB Server');
    }

    console.log('Connected to MongoDB Server');

    const db = client.db('TodoApp')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b6ad60d41d7c8505ccf9b7d')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log('unable to fetch the docs', err);
    // });

    db.collection('Todos').find().sort({'a': 1}).nextObject.then((max)=>{
        console.log('Todos count:'+max);
        
    },(err)=>{
        console.log('unable to fetch the docs', err);
    });


    //client.close();

});