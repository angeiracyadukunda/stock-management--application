// envi things

require('dotenv').config ();

const express = require('express');
const allRoutes =require ('./routes');
const {connectBb} = require('./db/databaseController');


const app = express();
connectDb();
app.use(express.json());
app.use('/api/em',allRoutes);

app.listen(process.env.PORT, (req, res) =>{
    console.log(`server listening on port ${process.env.PORT}`);
});