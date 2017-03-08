"use strict";
const express_1 = require('express');
const jsonwebtoken_1 = require('jsonwebtoken');
const config_1 = require('../config');
const protectedRouter = express_1.Router();
exports.protectedRouter = protectedRouter;
protectedRouter.use((request, response, next) => {
    const token = request.headers.authorization;
    jsonwebtoken_1.verify(token, config_1.secret, function (tokenError) {
        if (tokenError) {
            return response.status(403).json({
                message: 'Invalid token, please Log in first'
            });
        }
        next();
    });
});
protectedRouter.get('/', (request, response) => {
    response.json({
        text: 'Greetings, you have valid token.',
        title: 'Protected call'
    });
});
//# sourceMappingURL=/Users/phoenixyartoo/WebstormProjects/funishus/dist/server/routes/protected.js.map