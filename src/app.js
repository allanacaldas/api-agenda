const express = require('express');
const app = express();

const agendaRoutes = require('./routes/agenda-routes')

app.use(express.json());
app.use("/", agendaRoutes);

module.exports = app;

