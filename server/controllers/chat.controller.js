const { Messanger, UserMessanger } = require('../db/models')

const getChats = async (req, res) => {
  // console.log('--------->Chat', req);
  
  const { id } = req.body;
  if (id) {
    try{
      const allChats = await UserMessanger.findAll({where: {user_id: id}})
      console.log('-------> VSE CHATY', allChats)
      // const getChats = await Messanger.findAll({where: {id:}})
    } catch (error){
      console.error("Не передан либо ID");
      return res.sendStatus(500);
    }
  }
  
}



module.exports = {
  getChats
};
