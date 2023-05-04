const Sequelize = require('sequelize');
sequelize = new Sequelize('postgres://yvddudmtqsqwhz:5a33309c2192ecd4de0821bb28da72b7fdd0fc4a1531d22748affcdc9bdec212@ec2-34-197-91-131.compute-1.amazonaws.com:5432/db9aovo0ime2mr', 
{
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  module.exports = sequelize;