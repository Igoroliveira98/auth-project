const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: "Viviane Malho Goulão",
          username: "vivianemalho",
          email: "vivianemalho@gmail.com",
          password: bcrypt.hashSync("123456", 10)
        },
        {
          name: "Igor Oliveira Bomfim",
          username: "igoroliveira",
          email: "igoroliveira@gmail.com",
          password: bcrypt.hashSync("123456", 10)
        }
      ]);
    });
};
