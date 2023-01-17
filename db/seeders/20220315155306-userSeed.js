'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA
}

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'Users';
    await queryInterface.bulkInsert(options, [{
      first_name: 'John',
      last_name: 'Doe',
      email: 'JohnDoe@example.com',
      password: '12345',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'JaneDoe@example.com',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Users';
    await queryInterface.bulkDelete(options);
  }
};
