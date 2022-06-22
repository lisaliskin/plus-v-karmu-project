const { Messanger, UserMessanger, User, Message } = require('../db/models')

const getChats = async (req, res) => {
  
  const { id } = req.body;
  console.log('--------->Chat', id);
  if (id) {
    try{
      const allChats = await User.findAll({
        where: {id: id},
        include: [{
          model: Messanger,
          include: Message,
        }],
      });
      const obrabAllChats = JSON.parse(JSON.stringify(allChats))
      const chatsWithMessage = obrabAllChats.map((el) => {
        const messenger = el.Messangers;
        const allMessages = messenger.map((el) => {
          const id = el.id;
          const messages = el.Messages
          return {id, messages}
        })
        return {allMessages}
      });
      // const getMessangers = JSON.parse(JSON.stringify(allChats));
      // const messangers = getMessangers.Messangers
      // console.log('-------> VSE CHATY', JSON.parse(JSON.stringify(allChats[0].Messangers[0].Messages)))
      console.log('-------> VSE CHATY', chatsWithMessage[0].allMessages)
      if(chatsWithMessage[0].allMessages) {
        return res.json(chatsWithMessage[0].allMessages);
      }
      res.sendStatus(400)
      // const getChats = await Messanger.findAll({where: {id:}})
    } catch (error){
      console.log( error );
      return res.sendStatus(500);
    }
  }
  
}



module.exports = {
  getChats
};
