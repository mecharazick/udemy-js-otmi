function GenRandPass(par){
    if(!par.size) return "Insira um número de caracteres";
    const rand = (min, max) => Math.floor(Math.random()*(max-min)+min);

    const genNum = () => String.fromCharCode(rand(48,58)); 
    const genUp = () => String.fromCharCode(rand(65,91));
    const genLow = () => String.fromCharCode(rand(97,123));
    const symbol = '"!@#$%¨&*()-_=+[{]}^~?/;:><.,|';
    const genChar = () => symbol[rand(0,symbol.length)];

    const pass = [];

    for(let i = 0; i < par.size; i++){
        par.num && pass.push(genNum());
        par.upl && pass.push(genUp());
        par.lwl && pass.push(genLow());
        par.spc && pass.push(genChar());
    }
    return pass.slice(0, par.size).join('');

}

export default GenRandPass;