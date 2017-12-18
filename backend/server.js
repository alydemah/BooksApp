import express from 'express';
import mongodb from 'mongodb';

const AppServer = express();
const dbUrl = 'mongodb://localhost/booksappdb';


// Create connection to MongoDB db
mongodb.MongoClient.connect(dbUrl, function(err, db) {
    
    AppServer.get('/api/books', (req, res) => {
        // Query the db and fetch movies collection return.
        db.collection('movies').find({}).toArray((err, movies)) => {
            res.json({ movies });

        });
    });

    // Starting Express server  
    AppServer.listen(8000, () => console.log('Running Express server on localhost'));



});



