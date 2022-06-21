require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);

const http = require('http');
// const {
//   v4: uuidv4,
// } = require('uuid');

// const {
//   WebSocketServer,
// } = require('ws');

// const map = new Map(); // (Хранение данных. Возвращает ключ(id) => значение(браузерное соединение пользователя))

const authRouter = require('./routes/auth.router');
const usersRouter = require('./routes/users.router');
const messageRouter = require('./routes/message.router');

const app = express();

const {
  PORT,
  COOKIE_SECRET,
  COOKIE_NAME,
} = process.env;
console.log(COOKIE_SECRET);
// SERVER'S SETTINGS
app.set('cookieName', COOKIE_NAME);

// APP'S MIDDLEWARES
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

const sessionParser = session({
  name: app.get('cookieName'),
  secret: COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new FileStore(),
  cookie: {
    httpOnly: true,
    expires: 24 * 60 * 60e3, // COOKIE'S LIFETIME — 1 DAY
  },
});
app.use(sessionParser);

// APP'S ROUTES
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/message', messageRouter);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('server start on', PORT);
});
// app.listen(PORT, () => {
//   console.log('server start on', PORT);
// });
