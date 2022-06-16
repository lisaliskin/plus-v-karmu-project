const express = require('express');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config();

const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(process.env.PWD, 'public')));
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server is started on port: ${PORT}`);
});
