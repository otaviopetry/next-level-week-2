import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.json({ message: 'Hello dude!'});
})

app.listen(3333);