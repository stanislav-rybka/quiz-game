import express from "express";
import 'dotenv/config';
import cors from "cors";
import path from "path";
import sequelize from "./db.js"
import models from "./models/models.js";
import router from "./routes/index.js";
import errorHandlingMiddleware from "./middlewares/errorHandlingMiddleware.js";


// Reading path to current folder
const __dirname = import.meta.dirname;

// Reading server port number. If not provided, then default with 4000
const PORT = process.env.PORT || 4000;

// Creation express app instance
const app = express();


// Middleware to allow making REST requests from different origins
app.use( cors() );
// Middleware to format request body in JSON format
app.use( express.json() );
// Middleware to designate a path to folder with static files
app.use( express.static( path.resolve(__dirname, 'static') ) );
// Middleware to apply established routers (endpoints)
app.use('/api', router);
// Middleware to handle errors thrown when working with requests
app.use(errorHandlingMiddleware);


const start = async () => {
    try {
        // Connection to DB
        await sequelize.authenticate();
        await sequelize.sync();

        // Start server listening on specific port
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}


// Starting of server app
start();