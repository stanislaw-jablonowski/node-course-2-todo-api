// const MongoClient = require('mongodb').MongoClient;
// stosując destrukturing ze składni ES6 linia powyżej i poniżej znaczą to samo 
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Robert',
        age: 35,
        location: "Płock"
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
        // timestamp can be taken from _id
        console.log('Timestamp read from _id', result.ops[0]._id.getTimestamp());
    });

    db.close();
});


// for version 3
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     if (err) {
//         return console.log('Unable to connect to MongoDB server');
//     }
//     console.log('Connected to MongoDb server');
//     const db = client.db('TodoApp');

//     db.collection('Todos').insertOne({

//     }, (err, result) => {
//         if (err) {
//             return console.log('unable to insert todo', err);
//         }

//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });

//     client.close();
// });