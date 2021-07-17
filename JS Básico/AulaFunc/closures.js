function armazenaComeco(comeco) {
  function falaFrase(resto) {
    return comeco + " " + resto;
  }
  return falaFrase;
}
//Fazer dessa forma transforma a constante em uma function expression que tem o valor de comeco armazenado
//Quando essa func expression é executada, ela retorna o que estava aninhado dentro dela utilizando
//Como argumento o valor armazenado
const comeco = armazenaComeco("Olá");
console.log(comeco("Mundo!"));

//Outro exemplo

function criaMultiplicador(n) {
    return function (num) {
      return num * n;
  }
}

const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
console.log(triplica(7));
console.log(quadriplica(7));