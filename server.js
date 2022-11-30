import app from './src/app.js';

// buscando a porta definida  pelo gerenciador ou atribuindo a porta local padrão
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
})