const http = require('http');
const app = require('./src/config/custom-express');
const rotas = require('./src/app/routes/routes.js');
rotas(app);

const porta = 3030;
app.listen(porta, function () {
    console.log(`Servidor rodando na porta ${porta}`);

})


