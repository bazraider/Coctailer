const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const { sequelize } = require('./db/models');
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const registrationRouter = require('./routes/registration');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsConfig));

app.use('/', indexRouter);
app.use('/', loginRouter);
app.use('/', registrationRouter);

async function tryconnect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`);

  tryconnect();
});
