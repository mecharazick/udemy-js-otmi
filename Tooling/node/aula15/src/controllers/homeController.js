const HomeModel = require('../models/HomeModel');
HomeModel.create({
  titulo: "Teste",
  desc:"teste"
})
.then(data => console.log(data))
.catch(err => console.log(err));

exports.paginaInicial = (req, res) => {
  res.render('index');
};

exports.treatPost = (req, res) => {
  res.send(`Esse é o req.body: ${req.body.name}`);
}
