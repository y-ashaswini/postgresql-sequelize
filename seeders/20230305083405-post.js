"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "post",
      [
        {
          userId: 1,
          title: "hispotan de nu",
          content:
            "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          title: "some dummy title",
          content:
            "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('post', null, {});
  },
};
