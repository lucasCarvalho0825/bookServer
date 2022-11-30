import mongoose from 'mongoose';

//criando um novo schema no Mongo( oque seria uma tabela no relacional)
/* mongoose.Schema cria um novo schema de modo dinâmico ao banco de dados
    sintaxe nome do atributo : { tipo : ?, required : ?} 
    type: string or number
    required: é opcional porém indica que o aributo é obrigatório
*/
const bookSchema = new mongoose.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    numeroPaginas: { type: Number }
});


// mongoose.model cria um objeto de acordo com as caracteristicas descritas no schema 
const books = mongoose.model('books', bookSchema);

export default books;