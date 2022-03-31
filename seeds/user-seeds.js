const { User } = require('../models');

const userdata = [
    {
        username: 'gamerguy1',
        email: 'gamerguy@example.com',
        password: 'password123'
    },
    {
        username: 'gamergal99',
        email: 'gamergal@example.com',
        password: 'password123'
    },
    {
        username: 'gameguru00',
        email: 'gameguru@example.com',
        password: 'password123'
    },
    {
        username: 'casualn00b13',
        email: 'newtothis@example.com',
        password: 'password123'
    },
    {
        username: 'rpgadict',
        email: 'rpger@example.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;