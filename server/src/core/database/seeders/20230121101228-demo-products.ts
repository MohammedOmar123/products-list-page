'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          image:
            'https://m.media-amazon.com/images/I/71p1SFyK6RL._AC_SL1500_.jpg',
          name: 'Gorgeous Frozen Towels',
          price: 276,
          category: 'Electronics',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/61T0KQXgOkL._AC_SL1500_.jpg',
          name: 'Ergonomic Soft Gloves',
          price: 289,
          category: 'Industrial',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/61huKG6b7hL._AC_SL1200_.jpg',
          name: 'Electronic Frozen Shoes',
          price: 203,
          category: 'Jewelery',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/413G4YJsyQL._AC_SL1199_.jpg',
          name: 'Oriental Cotton Tuna',
          price: 128,
          category: 'Jewelery',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/71uG3rCr0kL._AC_SL1500_.jpg',
          name: 'Elegant Frozen Computer',
          price: 976,
          category: 'Health',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/61Sn0+xiRiL._AC_SL1500_.jpg',
          name: 'Gorgeous Granite Sausages',
          price: 133,
          category: 'Games',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/610oGQ4iR6L._AC_SL1500_.jpg',
          name: 'Rustic Soft Table',
          price: 573,
          category: 'Sports',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/71WtFY52CeL._AC_SL1500_.jpg',
          name: 'Gorgeous Bronze Computer',
          price: 841,
          category: 'Kids',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/51CZB5VGjsL._AC_SL1500_.jpg',
          name: 'Small Metal Table',
          price: 205,
          category: 'Jewelery',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/61jqaN-jq7L._AC_SL1500_.jpg',
          name: 'Tasty Soft Gloves',
          price: 261,
          category: 'Sports',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/61b9MPC65tL._AC_SL1500_.jpg',
          name: 'Refined Granite Ball',
          price: 73,
          category: 'Health',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'ttps://m.media-amazon.com/images/I/61ACu5xcNpL._AC_SL1500_.jpg',
          name: 'Modern Cotton Table',
          price: 355,
          category: 'Shoes',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/81qmTTzUlfL._AC_SL1500_.jpg',
          name: 'Refined Rubber Chicken',
          price: 132,
          category: 'Movies',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/818MAcfvjPL._AC_SL1500_.jpg',
          name: 'Recycled Steel Keyboard',
          price: 1,
          category: 'Industrial',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/717bpmLZ1UL._AC_SL1500_.jpg',
          name: 'Electronic Soft Computer',
          price: 201,
          category: 'Electronics',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/71dvlE+vExL._AC_SL1500_.jpg',
          name: 'Recycled Bronze Car',
          price: 546,
          category: 'Outdoors',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/71waplSVO7L._AC_SL1500_.jpg',
          name: 'Oriental Soft Tuna',
          price: 77,
          category: 'Computers',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/51ZO97Hm0EL._AC_SL1024_.jpg',

          name: 'Gorgeous Cotton Chips',
          price: 968,
          category: 'Garden',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/81jlYA6kt8L._AC_SL1500_.jpg',
          name: 'Intelligent Metal Bacon',
          price: 411,
          category: 'Grocery',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/71khH7EY9DL._AC_SL1500_.jpg',
          name: 'Unbranded Granite Ball',
          price: 651,
          category: 'Movies',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
