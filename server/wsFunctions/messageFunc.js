const { Message } = require('../db/models');

const addMesageWS = async (value) => {
  console.log('Вызвана функцияWS создание сообщения', value);

  const { text, user_id, messanger_id } = value;
  if (user_id && messanger_id) {
    try {
      Message.create({
        text,
        user_id,
        messanger_id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      console.log('------>> WSфункция создала сообщения');
      // return ws.sendStatus(200)
    } catch (error) {
      console.error('В WSфункции создания сообщения не передан либо ЮЗЕР либо Мессенджер');
      // return ws.sendStatus(500);
    }
  }
};

module.exports = {
  addMesageWS,
};
