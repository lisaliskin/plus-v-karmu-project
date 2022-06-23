const { Message, Messanger, User } = require('../db/models');

const getChats = async (req, res) => {
  const { id } = req.body;
  if (id) {
    try {
      const allChats = await User.findAll({
        where: { id },
        include: [{
          model: Messanger,
          include: Message,
        }],
      });
      return res.json(allChats);
      // const obrabAllChats = JSON.parse(JSON.stringify(allChats))
      // const chatsWithMessage = obrabAllChats.map((el) => {
      //   const messenger = el.Messangers;
      //   const allMessages = messenger.map((el) => {
      //     const id = el.id;
      //     const messages = el.Messages
      //     return {id, messages}
      //   })
      //   return {allMessages}
      // });
      // const getMessangers = JSON.parse(JSON.stringify(allChats));
      // const messangers = getMessangers.Messangers
      // const getChats = await Messanger.findAll({where: {id:}})
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
};
module.exports = {
  getChats,
};
// white_check_mark
// eyes
// raised_hands
