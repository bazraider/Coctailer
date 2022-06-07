const express = require('express');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const { sequelize } = require('./db/models');
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const registrationRouter = require('./routes/registration');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const corsConfig = {
//   origin: 'http://localhost:3000',
//   credentials: true,
// };

app.use(cors());

app.use('/', indexRouter);
app.use('/', loginRouter);
app.use('/', registrationRouter);

app.use(express.static(path.resolve(__dirname, './client/build')));

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
