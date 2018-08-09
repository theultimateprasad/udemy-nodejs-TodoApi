//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongDB Server');
    }

    console.log('Connected to MongoDB Server');

    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'some text here',
    //     completed: false

    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('User').insertOne({
    //     name: 'Prasad',
    //     Age: 31,
    //     Location: 'Nagpur'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to add collection', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));

    // });

    client.close();

});