const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

// conexao com a base de dados


app.use(express.json());
app.use(routes);



app.listen(3333);