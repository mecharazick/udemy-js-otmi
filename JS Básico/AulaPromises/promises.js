function rand(min,max){
    min *=1000;
    max *= 1000;
    return Math.floor(Math.random()*(max - min) + min);
}

function promise(msg, tempo){
    //Simula um processo demorado
    return new Promise((resolve,reject) => {setTimeout((msg) => {
        if(typeof msg !== 'string') {
            reject('Vai responder não puta?');
            return;
        }

        resolve(msg);
        return;
    },tempo, msg)});
}

Promise.race([
    promise('Oi', rand(5,10)),
    promise('Sou eu de novo', rand(5,10)),
    promise('Como você está?',rand(5,10)),
    promise(10, rand(5,10))
]).then(e => {
    console.log(e);
}).catch(e => {
    console.log(e);
});

// promise('Oi', rand(5,10)).then(e => {
//     console.log(e);
//     return promise('Sou eu de novo', rand(5,10));
// }).then(e => {
//     console.log(e);
//     return promise('Como você está?',rand(5,10));
// }).then(e => {
//     console.log(e);
//     return 'oi';
// }).then(e=> {
//     console.log(e);
//     return promise(10, 1000);
// }).catch(e => {
//     console.log(`Erro: ${e}`);
// });