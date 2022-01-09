// Requiring node modules
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')


// Requiring functions
const databaseConnection = require("./connections/dbconnection") 
const itemsRouter = require("./routes/Items.route")

// Initializing imported functions
dotenv.config()
databaseConnection()
const app = express();
app.use(cors())
app.use(express.json())

// router implementations
app.use("/items", itemsRouter);
app.get('/', (req, res) => { res.send('Hello from Express!')})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})
