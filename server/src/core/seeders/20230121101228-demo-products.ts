'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'lovely baby',
          image:
            'https://img.freepik.com/premium-photo/newborn-toddler-boy-laughing-bed_115594-1502.jpg?w=2000',
          price: 100,
          category: 'Baby',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'lovely baby2',
          image:
            'https://img.freepik.com/premium-photo/newborn-toddler-boy-laughing-bed_115594-1502.jpg?w=2000',
          price: 200,
          category: 'Baby',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Electronic Steel Mouse',
          image:
            '2wCEAAoHCBYVEhgVFhUYGBgYGBkYGBgaGBgYGBgaGhkZGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTQBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP',
          price: 300,
          category: 'Home',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            '2wCEAAoHCBYVEhgVFhUYGBgYGBkYGBgaGBgYGBgaGhkZGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTQBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP',
          price: 400,
          category: 'Kids',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Fantastic Granite Towels',
          image: 'https://loremflickr.com/640/480/fashion',
          price: 600,
          category: 'Kids',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Fantastic Granite Towels',
          image: 'https://loremflickr.com/640/480/fashion',
          price: 700,
          category: 'Kids',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g=',
          price: 800,
          category: 'Movie',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://media.istockphoto.com/id/911590226/vector/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with.jpg?s=612x612&w=0&k=20&c=QMpr4AHrBgHuOCnv2N6mPUQEOr5Mo8lE7TyWaZ4r9oo=',
          price: 900,
          category: 'Movie',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'sport',
          image:
            'https://thumbs.dreamstime.com/b/sport-equipment-2-22802518.jpg',
          price: 1000,
          category: 'Sport',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://media.istockphoto.com/photos/various-sport-equipments-on-grass-picture-id949190756?b=1&k=20&m=949190756&s=612x612&w=0&h=H0tLP0ZIRnQsbCk9F0WSOkhYNTyi7qj4s5mm3gsRd2M=',
          price: 300,
          category: 'Sport',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
          price: 130,
          category: 'Sport',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://thumbs.dreamstime.com/b/paper-bag-healthy-products-white-wooden-background-top-view-health-food-flat-lay-above-paper-bag-healthy-products-117080594.jpg',
          price: 3330,
          category: 'Health',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwcHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80',
          price: 3110,
          category: 'Health',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://thumbs.dreamstime.com/b/food-useful-to-health-13915840.jpg',
          price: 33120,
          category: 'Health',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://media.istockphoto.com/photos/healthy-eating-exercising-weight-and-blood-pressure-control-picture-id1280587810?b=1&k=20&m=1280587810&s=612x612&w=0&h=kjmDkN4Soac3i1G2dvp0x7-V8hEyOJBhee9WKM6HkHs=',
          price: 33,
          category: 'Health',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://media.istockphoto.com/photos/healthy-eating-exercising-weight-and-blood-pressure-control-picture-id1280587810?b=1&k=20&m=1280587810&s=612x612&w=0&h=kjmDkN4Soac3i1G2dvp0x7-V8hEyOJBhee9WKM6HkHs=',
          price: 33,
          category: 'Health',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://media.istockphoto.com/photos/healthy-eating-exercising-weight-and-blood-pressure-control-picture-id1280587810?b=1&k=20&m=1280587810&s=612x612&w=0&h=kjmDkN4Soac3i1G2dvp0x7-V8hEyOJBhee9WKM6HkHs=',
          price: 33,
          category: 'Health',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://media.istockphoto.com/photos/healthy-eating-exercising-weight-and-blood-pressure-control-picture-id1280587810?b=1&k=20&m=1280587810&s=612x612&w=0&h=kjmDkN4Soac3i1G2dvp0x7-V8hEyOJBhee9WKM6HkHs=',
          price: 33,
          category: 'Health',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://media.istockphoto.com/photos/healthy-eating-exercising-weight-and-blood-pressure-control-picture-id1280587810?b=1&k=20&m=1280587810&s=612x612&w=0&h=kjmDkN4Soac3i1G2dvp0x7-V8hEyOJBhee9WKM6HkHs=',
          price: 33,
          category: 'Health',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://media.istockphoto.com/photos/healthy-eating-exercising-weight-and-blood-pressure-control-picture-id1280587810?b=1&k=20&m=1280587810&s=612x612&w=0&h=kjmDkN4Soac3i1G2dvp0x7-V8hEyOJBhee9WKM6HkHs=',
          price: 33,
          category: 'Health',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://media.istockphoto.com/photos/healthy-eating-exercising-weight-and-blood-pressure-control-picture-id1280587810?b=1&k=20&m=1280587810&s=612x612&w=0&h=kjmDkN4Soac3i1G2dvp0x7-V8hEyOJBhee9WKM6HkHs=',
          price: 33,
          category: 'Health',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://media.istockphoto.com/photos/healthy-eating-exercising-weight-and-blood-pressure-control-picture-id1280587810?b=1&k=20&m=1280587810&s=612x612&w=0&h=kjmDkN4Soac3i1G2dvp0x7-V8hEyOJBhee9WKM6HkHs=',
          price: 33,
          category: 'Health',
          createdAt: '2022-01-03T20:18:05.833Z',
          updatedAt: '2022-01-03T20:18:05.833Z',
        },
        {
          name: 'Sleek Fresh Computer',
          image:
            'https://media.istockphoto.com/photos/healthy-eating-exercising-weight-and-blood-pressure-control-picture-id1280587810?b=1&k=20&m=1280587810&s=612x612&w=0&h=kjmDkN4Soac3i1G2dvp0x7-V8hEyOJBhee9WKM6HkHs=',
          price: 33,
          category: 'Health',
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
