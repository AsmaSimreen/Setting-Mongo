const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const logger = require("morgan");
require("dotenv").config();
// middleware for logging incoming requests
app.use(logger('dev'));

// middleware for parse JSON data
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening to Port <${PORT}>`);
});

//MongoDB Connection
mongoose.connect(
    process.env.MONGO_URI,
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
    }
);