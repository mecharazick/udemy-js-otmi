// const pessoas = [
//     {nome: 'Luiz', idade: 62},
//     {nome: 'Maria', idade: 23},
//     {nome: 'Eduardo', idade: 55},
//     {nome: 'Letícia', idade: 19},
//     {nome: 'Rosana', idade: 32},
//     {nome: 'Wallace', idade: 47},
// ];

// const oldestPerson = pessoas.reduce((oldest, person) => oldest.idade > person.idade ? oldest:person);
// console.log(oldestPerson);

function iqTest(numbers) {
  const evenOrOdd = numbers.split(" ").reduce((most, value) => {
    return Number(value) % 2 === 0 ? ++most : --most;
  }, 0);
  return evenOrOdd > 0
    ? numbers.split(" ").reduce((most, value, index) => {
        return Number(value) % 2 !== 0 ? index + 1 : most;
      }, 0)
    : numbers.split(" ").reduce((most, value, index) => {
        return Number(value) % 2 === 0 ? index + 1 : most;
      }, 0);
}
console.log(iqTest("2 4 7 8 10"));
