const express = require('express');
const path = require('path');
const { sequelize } = require('./db/models');

const app = express();
const PORT = 3000;

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
