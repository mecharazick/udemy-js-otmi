exports.paginaInicial = (req, res) => {
  res.render('index');
};

exports.treatPost = (req, res) => {
    res.send(`Esse é o req.body: ${req.body.name}`);
}