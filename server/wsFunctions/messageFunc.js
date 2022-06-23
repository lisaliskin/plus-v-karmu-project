const { Message } = require('../db/models/')

const addMesageWS = async (value) => {
  console.log('Вызвана функцияWS создание сообщения', value);

  const { text, user_id, messanger_id } = value;
  if (user_id && messanger_id) {
    console.log('Здесь проблема')
    try {
      console.log('----IN TRY', text, user_id, messanger_id)
     await Message.create({
      text,
        user_id,
        messanger_id
      });
      console.log('------>> WSфункция создала сообщения');
      // return ws.sendStatus(200)
    } catch (error) {
      console.error('В WSфункции создания сообщения не передан либо ЮЗЕР либо Мессенджер\n', error);
      // return ws.sendStatus(500);
    }
  }
};

module.exports = {
  addMesageWS,
};
