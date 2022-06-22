const { Message } = require('../db/models');

const addMesage = async (req, res) => {
  console.log('--------->Message', req);

  const { text, user_id, messanger_id } = req.body;
  if (user_id && messanger_id) {
    try {
      Message.create({
        text,
        user_id,
        messanger_id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      console.log('------>> message create');
    } catch (error) {
      console.error('Не передан либо ЮЗЕР либо Мессенджер');
      return res.sendStatus(500);
    }
  }
};

module.exports = {
  addMesage,
};
