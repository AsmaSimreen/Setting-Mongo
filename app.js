const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const logger = require("morgan");
// middleware for logging incoming requests
app.use(logger('dev'));

// middleware for parse JSON data
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening to Port <${PORT}>`);
});

//MongoDB Connection
mongoose.connect("mongodb://localhost:27017/Mongoose",
    {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true, 
    },
    (err) => {
        if (!err) {
            console.log("DB Connected");
            return;
        }
        console.log(err);
        process.exit(0); 
    });