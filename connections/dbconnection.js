const mongoose = require('mongoose');


const databaseConnection = async () => {
    const dbUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/expense_tracker';

    await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
        console.log("Database connected");
    });
}

module.exports= databaseConnection