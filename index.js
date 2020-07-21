const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

// set up PORT
const PORT = process.env.PORT || 3001;

// set up app
const app = express();

// set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// run build
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// run routes
app.use(routes);

// set up mongodb connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gallery',
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

// run app using port
app.listen(PORT, console.log(`app running on PORT: ${PORT}`));
