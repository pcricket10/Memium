'use strict';

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
    await queryInterface.bulkInsert('Comments', [
      {
        user_id: 1,
        content: "This meme SUX",
        meme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        content: "first!",
        meme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        content: "second!",
        meme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },


    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
