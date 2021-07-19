// import {nome as importedNome, sobrenome, idade, soma, Cliente} from './modulo1';
import module1, * as module2 from './modulo1';
//Quando há uma variavel de mesmo nome que a variavel importada, ocorre erro
//No módulo exportado, o export padrão é feito por export {} e dentro desse objeto devem estar os elementos
//a serem exportados. Elementos não exportados ficam utilizaveis apenas dentro do modulo
//No módulo que importa o conteúdo para fazer import do padrão de um modulo faz-se
//import {} e dentro desse objeto pra fazer uma atribuição por descontrução devem estar os nomes das chaves
//que estão sendo importadas
//Para importar ou exportar com outro nome, faz-se nome as nomeDesejado, tanto no import quanto no export

console.log(module1(5,7));
console.log(module2.nome, module2.sobrenome, module2.idade);