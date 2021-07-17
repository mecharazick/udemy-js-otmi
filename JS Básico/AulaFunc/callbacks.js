function rand(min = 1000, max = 3000){
  return Math.random() * (max - min) + min;
}

/*Os setTimeout estão simulando um processo demorado que deixaria funções necessariamente sequenciais
ocorrendo de forma assíncrona*/

function f1(callback){
  setTimeout(() => {
    console.log('f1');
    callback ? callback():'';
  }, rand());
}

function f2(callback){
  setTimeout(() => {
    console.log('f2');
    callback ? callback():'';
  }, rand());
}

function f3(callback){
  setTimeout(() => {
    console.log('f3');
    callback ? callback():'';
  }, rand());
}

function f1CallBack(){
  f2(f2CallBack);
}

function f2CallBack(){
  f3(f3CallBack);
}

function f3CallBack(){
  console.log('Olá Mundo!');
}

f1(f1CallBack);