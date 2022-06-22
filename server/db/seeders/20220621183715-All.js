const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        name: 'Pablo',
        password: await bcrypt.hash('123', 10),
        email: 'escobar@mail.ru',
        role: 'USER',
        phone: '79991234567',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Liza',
        password: await bcrypt.hash('123', 10),
        email: 'liza@mail.ru',
        role: 'USER',
        phone: '79991234568',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ramil',
        password: await bcrypt.hash('123', 10),
        email: 'ramil@mail.ru',
        role: 'USER',
        phone: '79991234569',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ilyas',
        password: await bcrypt.hash('123', 10),
        email: 'ilyas@mail.ru',
        phone: '79991234570',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const categories = [
      { name: 'animals', createdAt: new Date(), updatedAt: new Date() },
    ];

    const subcategories = [
      {
        name: 'help for animals', category_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
    ];

    const tasks = [
      {
        name: 'Подружиться коту с собакой',
        description: 'Подружить кота Васю с соседским псом Мурой',
        img: 'https://www.spletnik.ru/img/__post/a1/0cea5c624b2daxl_a1ff3a1fa7c9e9ef6b1a11ea3ffca38c_672.jpg',
        subcategory_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Подружиться барсу с тигром',
        description: 'Подружить тигра Волка с соседским барсом Гарегином',
        img: 'http://udivitelno.com/images/12/tigr-amur-i-kozel-timur-druzhba-khishchnika-i-zhertvy-20-foto-video/1-%D0%A2%D0%B8%D0%B3%D1%80%20%D0%90%D0%BC%D1%83%D1%80%20%D0%B8%20%D0%BA%D0%BE%D0%B7%D0%B5%D0%BB%20%D0%A2%D0%B8%D0%BC%D1%83%D1%80.JPG',
        subcategory_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const usersTasks = [
      {
        user_id: 1, task_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 2, task_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 1, task_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 3, task_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ];

    const messangers = [
      { task_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { task_id: 2, createdAt: new Date(), updatedAt: new Date() },
    ];

    const usersMessangers = [
      {
        user_id: 1, messanger_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 2, messanger_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 1, messanger_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 3, messanger_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ];

    const messages = [
      {
        text: 'Привет, хочу помочь', user_id: 1, messanger_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        text: 'Нет проблем, буду рад', user_id: 2, messanger_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        text: 'Окей', user_id: 1, messanger_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        text: 'Жду завтра', user_id: 2, messanger_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        text: '2 мессенджер', user_id: 1, messanger_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        text: 'Ага', user_id: 3, messanger_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },

    ];

    await queryInterface.bulkInsert('Users', users);
    await queryInterface.bulkInsert('Categories', categories);
    await queryInterface.bulkInsert('Subcategories', subcategories);
    await queryInterface.bulkInsert('Tasks', tasks);
    await queryInterface.bulkInsert('UsersTasks', usersTasks);
    await queryInterface.bulkInsert('Messangers', messangers);
    await queryInterface.bulkInsert('UserMessangers', usersMessangers);
    await queryInterface.bulkInsert('Messages', messages);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Subcategories', null, {});
    await queryInterface.bulkDelete('Tasks', null, {});
    await queryInterface.bulkDelete('UsersTasks', null, {});
    await queryInterface.bulkDelete('Messangers', null, {});
    await queryInterface.bulkDelete('UsersMessangers', null, {});
    await queryInterface.bulkDelete('Messages', null, {});
  },
};
