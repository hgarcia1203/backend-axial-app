const Sequelize = require('sequelize');
const db = {}

//cambiar los datos de Sequelize para usar la base de datos local
//Sequelize(nameDB, usuario, password, {json con datos solo cambiar el host: a localhost})
const sequelize = new Sequelize("buh4yhzttbvbioekyist", 'uedtpbnpukwgx74t', '0MKG0OlaPVa6Y3WHT6Ss', {
    host: 'buh4yhzttbvbioekyist-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;