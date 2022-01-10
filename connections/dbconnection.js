const mongoose = require('mongoose');


const databaseConnection = async () => {
    const dbUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/expense_tracker';

    //Set up default mongoose connection
    mongoose.connect(dbUrl, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    
    
    //Get the default connection
    const db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)
    db.on("error", console.error.bind(console, "Connection error:"));
    db.once("open", () => {
        console.log("Annunciation Database connected");
    });
}

module.exports= databaseConnection