"use strict";
const express_1 = require('express');
const crypto_1 = require('crypto');
const jsonwebtoken_1 = require('jsonwebtoken');
const config_1 = require('../config');
const loginRouter = express_1.Router();
exports.loginRouter = loginRouter;
const user = {
    hashedPassword: '6fb3a68cb5fe34d0c2c9fc3807c8fa9bc0e7dd10023065ea4233d40a2d6bb4a' +
        '7e336a82f48bcb5a7cc95b8a590cf03a4a07615a226d09a89420a342584a' +
        'a28748336aa0feb7ac3a12200d13641c8f8e26398cfdaf268dd68746982bcf' +
        '59415670655edf4e9ac30f6310bd2248cb9bc185db8059fe979294dd3611fdf28c2b731',
    salt: 'OxDZYpi9BBJUZTTaC/yuuF3Y634YZ90KjpNa+Km4qGgZXGI6vhSWW0T91' +
        'rharcQWIjG2uPZEPXiKGnSAQ73s352aom56AIYpYCfk7uNsd+7AzaQ6dxTnd9AzCCdIc/J' +
        '62JohpHPJ5eGHUJJy3PAgHYcfVzvBHnIQlTJCQdQAonQ=',
    username: 'john'
};
loginRouter.post('/signup', function (request, response, next) {
    if (!request.body.hasOwnProperty('password')) {
        let err = new Error('No password');
        return next(err);
    }
    const salt = crypto_1.randomBytes(128).toString('base64');
    crypto_1.pbkdf2(request.body.password, salt, 10000, config_1.length, config_1.digest, (err, hash) => {
        response.json({
            hashed: hash.toString('hex'),
            salt: salt
        });
    });
});
// login method
loginRouter.post('/', function (request, response, next) {
    crypto_1.pbkdf2(request.body.password, user.salt, 10000, config_1.length, config_1.digest, (err, hash) => {
        if (err) {
            console.log(err);
        }
        // check if password is active
        if (hash.toString('hex') === user.hashedPassword) {
            const token = jsonwebtoken_1.sign({ 'user': user.username, permissions: [] }, config_1.secret, { expiresIn: '7d' });
            response.json({ 'jwt': token });
        }
        else {
            response.json({ message: 'Wrong password' });
        }
    });
});
//# sourceMappingURL=/Users/phoenixyartoo/WebstormProjects/funishus/dist/server/routes/login.js.map