const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
            <form action = "/" methor = "POST">
            <label for="name">Name: </label>
            <input type = "text" name = "nameInput" />
            <button>Enviar</button>
            </form>
            `);
});


app.post('/', (req, res) =>{
    res.send(`Recebi o form`);
})


app.listen(3000, () => {
    console.log('Server inicializado na porta 3000');
    console.log('Para vizualisar, acesse http://localhost:3000');
})
