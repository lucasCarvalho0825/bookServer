import books from "../models/Book.js";

class BooksController {

    //buscar por todos os livros
    static listAllBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books);
        })
    }

    //buscar por um livro expecífico
    static listById = (req, res) => {
        //pega o id enviado por paramentro na requisição
        const id = req.params.id;

        books.findById(id, (err, books) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Id do livro não localizado` });
            } else {
                res.status(200).send(books);
            }
        })
    }

    // cadastrar um novo livro 
    static create = (req, res) => {
        let book = new books(req.body);

        book.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Failed to create new book` });
            } else {
                res.status(201).send(book.toJSON());
            }
        })
    }

    static updateBook = (req, res) => {
        const id = req.params.id;

        /*usada para encontrar um documento correspondente, atualiza-o de acordo com o argumento de atualização, 
        passando quaisquer opções e retorna o documento encontrado (se houver) para o callback 
        
        o primeiro parâmetro que vamos passar é qual é o Id do que eu quero atualizar;
        
        o segundo é o meu critério de atualização no Mongo quando vamos fazer alguma atualização usamos uma palavra 
        reservada que é o set, o que eu vou mandar para substituir. Vamos colocar aqui o cifrão set dois pontos e vou
        indicar que ele é para jogar nesse livro desse Id o que estiver no req.body que é o que está vindo no corpo da
        requisição;

        o terceiro é uma função onde eu vou verificar caso aconteça algum erro;
        */
        books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: `Book update success` });
            }
        })
    }


    static deleteBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: `Book removed successfully` });
            }
        })
    }
}

export default BooksController;