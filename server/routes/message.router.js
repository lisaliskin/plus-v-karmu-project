const { Router } = require('express');
const messageController = require('../controllers/message.controller')


const messageRouter = Router();

messageRouter.post('/add', messageController.addMesage);


module.exports = messageRouter;
