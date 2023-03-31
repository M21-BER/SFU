const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('freedb_fileuploder', 'freedb_dmboss', 'W6Wg5!j2P@DWJM&', {
    host: 'sql.freedb.tech',
    dialect: 'mysql'
});

sequelize.authenticate().then(response => console.log('Connection has been established successfully.')).catch(e => { throw e })

module.exports = sequelize