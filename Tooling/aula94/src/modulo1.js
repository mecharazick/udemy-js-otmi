export const nome = 'Lucas';
export const sobrenome = 'Pinheiro';
export const idade = 22;
export default function(x,y){
    return x + y;
};

export class Cliente{
    constructor(nome, saldo){
        this.nome = nome;
        this.saldo = saldo;
    };
    deposito(valor){
        this.saldo += valor;
    };

}

// export {nome, sobrenome, idade};