const { Router } = require('express');
const chatController = require('../controllers/chat.controller');

const chatRouter = Router();

chatRouter.post('/get', chatController.getChats);
chatRouter.post('/new', chatController.createChat);

module.exports = chatRouter;
