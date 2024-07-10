exports.paginaInicial = (req, res) => {
  res.send(`
        <form action = "/" method = "POST">
        <label for="name">Name: </label>
        <input type = "text" name = "nameInput" />
        <button>Enviar</button>
        </form>
        `);
};

exports.treatPost = (req, res) => {
    res.send(`Post funfando`);
}