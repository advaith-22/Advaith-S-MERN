const express = require('express');
const app = express();
const todoroute = require('./routes/todo');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = 2248 || process.env.PORT;
const uri = process.env.DATABASE_URL;


app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use("/api/todo", todoroute);

mongoose.connect(uri).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    });
}).catch((error) => {
    console.log(error);
});