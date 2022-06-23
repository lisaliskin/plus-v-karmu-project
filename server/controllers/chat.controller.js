const {
  Messanger, UserMessanger, User, Message,
} = require('../db/models');
// const { all } = require('../routes/chat.router');

const getChats = async (req, res) => {
  const { id } = req.body;
  console.log('Получен id Юзера в роутере на получение всех CHATOV', id);
  if (id) {
    try {
      const allChats = await User.findAll({
        where: { id },
        include: [{
          model: Messanger,
          include: [{
            model: Message,
            include: [{
              model: User,
            }]
          }]
          // [{
          //   model: User,
          // }],
        }],
      });
      // console.log(allChats);
      const obrabAllChats = JSON.parse(JSON.stringify(allChats));
      const chatsWithMessage = obrabAllChats.map((el) => {
        const messenger = el.Messangers;
        const allMessages = messenger.map((el) => {
          const { id } = el;
          const messages = el.Messages;
          return { id, messages };
        });
      return (allMessages)

      })
      // const getMessangers = JSON.parse(JSON.stringify(allChats));
      // const messangers = getMessangers.Messangers
      // console.log('-------> VSE CHATY', JSON.parse
      // (JSON.stringify(allChats[0].Messangers[0].Messages)))
      // console.log('-------> VSE CHATY', chatsWithMessage[0].allMessages);
        console.log('------>',chatsWithMessage);
        return res.json(chatsWithMessage[0]);
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
