const bcrypt = require('bcrypt');
const {
  User,
} = require('../db/models');

const signUp = async (req, res) => {
  const {
    name,
    password1,
    password2,
    email,
    phone,
    role,
  } = req.body;
  console.log('------------', req.body);

  if (name && phone && email && password1 && password1 === password2) {
    const secretPass = await bcrypt.hash(password1, Number(process.env.ROUNDS));
    try {
      const newUser = await User.create({
        name,
        password: secretPass,
        email,
        phone,
        role,
        points: 0,
      });
      req.session.user = {
        id: newUser.id,
        name: newUser.name,
      };

      return res.json({
        id: newUser.id,
        name: newUser.name,
      });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(401);
};

const signIn = async (req, res) => {
  const {
    password,
    email,
  } = req.body;

  // console.log('kdkjdkdk--->', password, email);

  if (password && email) {
    try {
      const currentUser = await User.findOne({
        where: {
          email,
        },
      });
      if (currentUser && await bcrypt.compare(password, currentUser.password)) {
        console.log('TOLKO CHTO ID', currentUser.id);
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
          phone: currentUser.phone,
          points: currentUser.points,
        };

        return res.json({
          id: currentUser.id,
          name: currentUser.name,
          phone: currentUser.phone,
          points: currentUser.points,
        });
      }
      console.log('Зашел сюда в сайн ине');
      return res.sendStatus(401);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signOut = async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    res.clearCookie(req.app.get('cookieName'));

    return res.sendStatus(200);
  });
};

const checkAuth = async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user.id);
    return res.json({
      id: user.id,
      name: user.name,
    });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

module.exports = {
  signIn,
  signOut,
  signUp,
  checkAuth,
};
