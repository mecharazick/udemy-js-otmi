export default class ValidateCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this,'cpfLimpo', {
            enumerable: true,
            writable:false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, ''),
        });
    };

    isSequence(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
    }

    generateCpf(){
        const cpfWtDigit = this.cpfLimpo.slice(0,-2);
        const digito1 = ValidateCpf.generateDigit(cpfWtDigit);
        const digito2 = ValidateCpf.generateDigit(cpfWtDigit + digito1);

        return cpfWtDigit + digito1 + digito2;
    }

    static generateDigit(cpf){
        let counter = cpf.length + 1;
        const digit = 11 - Array.from(cpf).reduce((acum,value) => {
            acum += Number(value) * counter;
            counter--;
            return acum;
        },0) % 11;
        return digit > 9 ? 0 : digit;
    }

    validateCpf(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequence() === this.cpfLimpo) return false;
        const newCpf = this.generateCpf();
        if(!newCpf) return false;

        return newCpf === this.cpfLimpo;
    }
}

