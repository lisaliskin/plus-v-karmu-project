require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);


const http = require('http');
const { v4: uuidv4 } = require('uuid');

const { WebSocketServer } = require('ws');

const map = new Map(); //(Хранение данных. Возвращает ключ(id) => значение(браузерное соединение пользователя))

const authRouter = require('./routes/auth.router');
const usersRouter = require('./routes/users.router');


const app = express();

const { PORT, COOKIE_SECRET, COOKIE_NAME } = process.env;

// SERVER'S SETTINGS
app.set('cookieName', COOKIE_NAME);

// APP'S MIDDLEWARES
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json());

const sessionParser = session({
  name: app.get('cookieName'),
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new FileStore(),
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1e3 * 86400, // COOKIE'S LIFETIME — 1 DAY
    },
 });
 
 //part1 'upgrade' обновление протокола
server.on('upgrade', function (request, socket, head) {
  console.log('Parsing session from request...');

   sessionParser(request, {}, () => {
   // if (!request.session.userId) {
    //  socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
     // socket.destroy();
     // return;
   // }

   // console.log('Session is parsed!');

    wss.handleUpgrade(request, socket, head, function (ws) {  //(ws)-экземпляр подключения самого пользователя
      wss.emit('connection', ws, request);
    });
  });
});

// part2 работа с подключением
wss.on('connection', function (ws, request) {
  const userid = request.session.userid || uuidv4() ;

  map.set(userid, ws); //ws - идентификатор подключения

  ws.on('message', function (message) {
    //
    // Here we can now use session parameters.
    //
    console.log(`Received message ${message} from user ${userid}`);
  });

  ws.on('close', function () {
    map.delete(userid);
  });
});



// APP'S ROUTES
app.use('/auth', authRouter);
app.use('/users', usersRouter);


const server = http.createServer(app);


server.listen(PORT, () => {
  console.log('server start on', PORT);

});
