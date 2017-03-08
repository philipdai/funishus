"use strict";
const express_1 = require('express');
const publicRouter = express_1.Router();
exports.publicRouter = publicRouter;
publicRouter.get('/simple', (request, response) => {
    response.json({
        title: 'Greetings.',
        text: 'Hello Angular 2'
    });
});
//# sourceMappingURL=/Users/phoenixyartoo/WebstormProjects/funishus/dist/server/routes/public.js.map