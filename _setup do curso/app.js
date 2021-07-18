['zero','one','two','three','four','five', 'six','seven','eight','nine'].forEach((e, i) =>{
    this[e] = op => op ? op(i):i;
  });
  //Nesse caso, ao usar this dentro do forEach(que não define um escopo próprio)
  //e dentro da arrow function que também não atribui this a um escopo próprio
  //a plavra reservada this se refere ao objeto global e ao usar
  //this[e] = algumaCoisa, estamos atribuindo à chave e do objeto global o valor da direita.
  //Como o escopo é o global, qualquer coisa nesse escopo consegue acessar essas funções criadas.
  
const plus = b => function(a){return a+b;};
const minus = b => function(a){return a-b;};
const times = b => function(a){return a*b;};
const dividedBy = b => function(a){return Math.floor(a/b);};