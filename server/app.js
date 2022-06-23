require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);

const http = require('http');

const {
  v4: uuidv4,
} = require('uuid');

const { WebSocketServer } = require('ws');

const map = new Map();
// (Хранение данных. Возвращает ключ(id) => значение(браузерное соединение пользователя))

const authRouter = require('./routes/auth.router');
const usersRouter = require('./routes/users.router');
const messageRouter = require('./routes/message.router');
const chatRouter = require('./routes/chat.router');
const taskRouter = require('./routes/tasks.router');
const catRouter = require('./routes/categories.router');

const app = express();

const {
  PORT,
  COOKIE_SECRET,
  COOKIE_NAME,
} = process.env;
console.log(COOKIE_SECRET);
// SERVER'S SETTINGS
// PORT=process.env.PORT;
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

app.use((req, res, next) => {
  res.locals.user = req.session?.user;
  next();
});

// APP'S ROUTES
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/message', messageRouter);
app.use('/chat', chatRouter);
app.use('/tasks', taskRouter);
app.use('/categories', catRouter);

const server = http.createServer(app);
const wss = new WebSocketServer({
  clientTracking: false,
  noServer: true,
});

// part1 'upgrade' обновление протокола
server.on('upgrade', (request, socket, head) => {
  console.log('Parsing session from request...');

  sessionParser(request, {}, () => {
    // if (!request.session.userId) {
    //  socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
    // socket.destroy();
    // return;
    // }

    // console.log('Session is parsed!');

    wss.handleUpgrade(request, socket, head, (ws) => {
      // (ws)-экземпляр подключения самого пользователя
      wss.emit('connection', ws, request);
    });
  });
});

// part2 работа с подключением
wss.on('connection', (ws, request) => {
  const userid = request.session.userid || uuidv4();

  map.set(userid, ws); // ws - идентификатор подключения

  // console.log('-------->map', map.userid)

  ws.on('message', (message) => {
    const {
      type,
      payload,
    } = JSON.parse(message);
    console.log('message in ws.on --->>', payload);
    switch (type) {
      case 'SET_MESSAGE':
        for (const [userid, clientWs] of map) {
          clientWs.send(JSON.stringify(payload.text));
          console.log('Отправлено всем', payload.text);
        }
        break;

      default:
        console.log('Вышел');
        break;
    }
  });

  ws.on('close', () => {
    map.delete(userid);
  });
});

server.listen(PORT, () => {
  console.log('server start on', PORT);
});
