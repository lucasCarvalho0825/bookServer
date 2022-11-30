import express from 'express';
import books from './booksRouter.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titule: "Library Visionnaire" })
    })

    app.use(
        express.json(),
        books
    )
}

export default routes;