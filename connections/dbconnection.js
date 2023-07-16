const mongoose = require('mongoose');


function databaseConnection(){
    //Set up default mongoose connection
    const mongoDB = process.env.MONGODB_URL || 'mongodb://127.0.0.1/expense-tracker';
    mongoose.connect(mongoDB, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });
    
    //Get the default connection
    const db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    db.once("open", () => {
        console.log("Database connected");
    });
}

module.exports= databaseConnection
