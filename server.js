/*jshint esversion: 6 */
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const bp = require('body-parser');
const db = require('./models');
const Messages = db.Messages;
const Topics = db.Topics;
const Users = db.Users;

app.use(express.static('public'));
app.use(bp.urlencoded());

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/public') });
});

const server = app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`server runing on PORT ${PORT}`);
});