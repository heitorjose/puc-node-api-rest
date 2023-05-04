const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://yvddudmtqsqwhz:5a33309c2192ecd4de0821bb28da72b7fdd0fc4a1531d22748affcdc9bdec212@ec2-34-197-91-131.compute-1.amazonaws.com:5432/db9aovo0ime2mr', {dialect: 'postgres'});

module.exports = sequelize;