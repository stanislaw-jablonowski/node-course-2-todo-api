// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b428606ef3a001116d08f2d')
    // }).toArray().then((doc) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(doc, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({ name: "Robert" }).toArray().then((doc) => {
        console.log('Users');
        console.log(JSON.stringify(doc, undefined, 2));
    }, (err) => {
        console.log('unable to fetch users');
    });

    // db.close();
});


// for version 3
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     if (err) {
//         return console.log('Unable to connect to MongoDB server');
//     }
//     console.log('Connected to MongoDb server');
//     const db = client.db('TodoApp');
//     client.close();
// });