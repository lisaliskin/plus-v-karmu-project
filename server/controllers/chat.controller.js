const sequelize = require('sequelize');
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
        console.log('------>',chatsWithMessage[0]);
        const sortMessengers = chatsWithMessage[0].sort(function (a, b) {
          if (a.id > b.id){
            return -1;
          }
          if (a.id < b.id){
            return 1;
          }
          console.log('------>', sortMessengers);
        })
        return res.json(sortMessengers);
      // const getChats = await Messanger.findAll({where: {id:}})
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
};

const createChat = async (req, res) => {
  const { el, userSignIn} = req.body;
  console.log('Получена информация для создания чата', el , 'a potom', userSignIn);
  if (el.id && el.Users && userSignIn.id) {
    console.log('Данные для создания чата переданы успешно');
    const Users = el.Users[0];
    try {
     const newChat = await Messanger.create({
      task_id: el.id,
      });
      console.log('Создан новый чат', newChat.id);
      console.log('Создан новый чат', Users.id, '----> u drugogo', userSignIn.id);
      const createrUserChat = await UserMessanger.create({
        messanger_id: newChat.id,
        user_id: Users.id,
      })
      console.log('Создан новый юзерЧат креэйтера', createrUserChat);
      const subUserChat = await UserMessanger.create({
        messanger_id: newChat.id ,
        user_id: userSignIn.id,
      })
      console.log('Создан новый юзерЧат подписчика', subUserChat);
      return res.json({userSignIn});
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
};





module.exports = {
  getChats,
  createChat
};
// white_check_mark
// eyes
// raised_hands
