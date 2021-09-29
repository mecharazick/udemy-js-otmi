const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
        res.send(`
        <form action = "/" method = "POST">
        <label for="name">Name: </label>
        <input type = "text" name = "nameInput" />
        <button>Enviar</button>
        </form>
        `);
});


app.post('/', (req, res) =>{
    console.log(req.body);
    res.send(`Recebi o form`);
})

app.get('/testes/:id?', (req, res) => {
    console.log(req.params);
    res.send('Oi');
    // res.send(`
    //         <form action = "/" methor = "POST">
    //         <label for="name">Name: </label>
    //         <input type = "text" name = "nameInput" />
    //         <button>Enviar</button>
    //         </form>
    //         `);
});

app.listen(3000, () => {
    console.log('Server inicializado na porta 3000');
    console.log('Para vizualisar, acesse http://localhost:3000');
})
