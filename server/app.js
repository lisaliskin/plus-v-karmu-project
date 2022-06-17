const express = require('express');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const http = require('http');
const { v4: uuidv4 } = require('uuid');

const { WebSocketServer } = require('ws');

const map = new Map(); //(Хранение данных. Возвращает ключ(id) => значение(браузерное соединение пользователя))

const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config();

const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(process.env.PWD, 'public')));
app.use(cookieParser());

const server = http.createServer(app);


server.listen(PORT, () => {
  console.log('server start on', PORT);
});
