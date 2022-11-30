import express from 'express';
import BooksController from '../controllers/BooksController.js';

const router = express.Router();

router
    .get("/books", BooksController.listAllBooks)
    .get("/books/:id", BooksController.listById)
    .post("/books", BooksController.create)
    .put("/books/:id", BooksController.updateBook)
    .delete("/books/:id", BooksController.deleteBook)

export default router;