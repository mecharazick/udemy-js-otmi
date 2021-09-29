import ValidateCpf from './ValidateCpf';

export default class GenCpf{
    
    rand(min = 100000000, max = 1000000000){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatCpf(cpf){
        const formattedCpf = (`${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9,11)}`);
        return formattedCpf
    }

    genNewCpf(){
        const cpfWtDigit = this.rand();
        const digit1 = ValidateCpf.generateDigit(cpfWtDigit);
        const digit2 = ValidateCpf.generateDigit(cpfWtDigit + digit1);
        return this.formatCpf(cpfWtDigit + digit1 + digit2);
    }
}