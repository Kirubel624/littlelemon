const express = require('express');
const cors = require('cors');
const app = express();
const reserveRoute=require('./routes/reserveRoutes')

app.use(cors({
    origin:'*'
}));


app.use(express.json());
app.use('/api/v1/',reserveRoute);


module.exports = app