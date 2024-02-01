import express from "express";
import 'dotenv/config';
import cors from "cors";
import path from "path";
import sequelize from "./db.js"


// Reading path to current folder
const __dirname = import.meta.dirname;

// Reading server port number. If not provided, then default with 4000
const PORT = process.env.PORT || 4000;

// Creation express app instance
const app = express();


// Assigning middlewares
app.use( cors() );
app.use( express.json() );
app.use( express.static( path.resolve(__dirname, 'static') ) );


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