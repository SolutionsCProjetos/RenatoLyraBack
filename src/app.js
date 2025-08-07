// src/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');

const solicitantesRoutes = require('./routes/solicitantes');
const usuariosRoutes = require('./routes/usuarios');
const demandasRoutes = require('./routes/demandas');
const lideresRoutes = require('./routes/lideres');

const app = express();
const upload = multer();

// app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/solicitantes', solicitantesRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/demandas', demandasRoutes);
app.use('/lideres', lideresRoutes);

module.exports = app;

