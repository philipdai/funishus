"use strict";
const express_1 = require('express');
const uuid = require('uuid');
const feedRouter = express_1.Router();
exports.feedRouter = feedRouter;
feedRouter.post('/', (request, response) => {
    response.json({
        id: uuid.v4(),
        text: request.body.text,
        name: request.body.name
    });
});
feedRouter.post('/:id/comment', (request, response) => {
    const feedID = request.params.id;
    response.json({
        id: feedID,
        comment: {
            id: uuid.v4(),
            text: request.body.text
        }
    });
});
feedRouter.delete('/:id', (request, response) => {
    response.json({
        id: request.params.id
    });
});
//# sourceMappingURL=/Users/phoenixyartoo/WebstormProjects/funishus/dist/server/routes/feed.js.map