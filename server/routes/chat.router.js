const { Router } = require('express');
const chatController = require('../controllers/chat.controller');

const chatRouter = Router();

chatRouter.post('/get', chatController.getChats);

module.exports = chatRouter;
