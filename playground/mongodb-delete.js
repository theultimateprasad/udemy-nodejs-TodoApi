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

    // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({
        completed: true
    }).then((result) => {
        console.log(result);
    });


    //client.close();

});