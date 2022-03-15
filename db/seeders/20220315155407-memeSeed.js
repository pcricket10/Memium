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
    //id, name, meme_url user_id, createdAt, updatedAt
    await queryInterface.bulkInsert('Memes', [{
      name: 'meme war',
      meme_url: 'https://images.theconversation.com/files/177834/original/file-20170712-14488-19lw3sc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'no money :(',
      meme_url: 'https://cdn.vox-cdn.com/thumbor/FOIV1c1Eq9Y1HQq-Sn1RgReLp0E=/0x0:735x500/920x613/filters:focal(310x192:426x308):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66727168/image.0.png',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'most popular language',
      meme_url: 'https://833250.smushcdn.com/1694534/wp-content/uploads/2021/06/2.jpeg?lossy=1&strip=1&webp=1',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'trying to learn a programming language',
      meme_url: 'https://flatlogic.com/blog/wp-content/uploads/2021/06/21.jpeg',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'frontend vs backend',
      meme_url: 'https://833250.smushcdn.com/1694534/wp-content/uploads/2021/06/18.jpeg?lossy=1&strip=1&webp=1',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'javascriptception',
      meme_url: 'https://833250.smushcdn.com/1694534/wp-content/uploads/2021/06/1-1.jpeg?lossy=1&strip=1&webp=1',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'bug free',
      meme_url: 'https://833250.smushcdn.com/1694534/wp-content/uploads/2021/06/Hello-World-Programming.jpeg?lossy=1&strip=1&webp=1',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'dark side',
      meme_url: 'https://833250.smushcdn.com/1694534/wp-content/uploads/2021/06/display.jpeg?lossy=1&strip=1&webp=1',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'DROP TABLE!!!!!',
      meme_url: 'https://pics.me.me/asa-sql-developer-idont-know-what-were-yelling-about-memecrunch-com-50305722.png',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'cant be late twice',
      meme_url: 'https://64.media.tumblr.com/8b33555001dfd1f4c2b4a0d8894a6839/a3c4c5555a725646-ba/s640x960/4e02167f7137973c21ae0a55a94ce51f1fe0fe61.jpg',
      user_id: 2,
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
  }
};
