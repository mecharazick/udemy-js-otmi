class ValidateForm{
  constructor(){
    this.form = document.querySelector('.form');
    this.eventos();
  }
  
  eventos(){
    this.form.addEventListener('submit', e =>{
      this.handleSubmit(e);
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const fieldsAreValid = this.areValidFields();
    const passwordsAreValid = this.areValidPasswords();

    if(fieldsAreValid && passwordsAreValid) {
      alert('Formulário enviado');
      this.form.submit();
    }
  }

  areValidFields(){
    let valid = true;

    for(let error of this.form.querySelectorAll('.error-text')){
      error.remove();
    }

    for(let field of this.form.querySelectorAll('.validate')){
      if(!field.value) {
        const msg =`Campo "${field.previousElementSibling.innerText}" não pode estar vazio`;
        this.createError(field, msg);
        valid = false;
      }

      if(field.classList.contains('cpf')){
        if(!this.validateCpf(field)) valid = false;
      }

      if(field.classList.contains('user')){
        if(!this.validateUser(field)) valid = false;
      }
    }

    return valid;
  }

  areValidPasswords(){
    let valid = true;

    const pass = this.form.querySelector('.pass');
    const repeatPass = this.form.querySelector('.pass-repeat');

    if(pass.value !== repeatPass.value){
      valid = false;
      this.createError(pass, 'Campos senha e repetir senha precisam ser iguais');
      this.createError(repeatPass, 'Campos senha e repetir senha precisam ser iguais');
    }

    if(pass.value.length < 6 || pass.value.length > 12){
      valid = false;
      this.createError(pass, 'Senha precisa entre entre 6 e 12 caracteres');
    }

    return valid;
  }

  validateCpf(field){
    const cpf = new ValidateCpf(field.value);

    if(!cpf.validateCpf()) {
      this.createError(field, 'CPF Inválido');
      return false;
    }
    return true;
  }

  validateUser(field){
    const user = field.value;
    let valid = true;
    if(user.length > 12 || user.length < 3){
      this.createError(field, 'Nome de usuário precisa ter entre 3 e 12 caracteres');
      valid =  false;
    }
    if(!user.match(/[a-zA-Z0-9]+/g)){
      this.createError(field, 'Nome de usuário precisa conter apenas letras e/ou números');
      valid = false;
    }

    return valid;
  }

  createError(field, message){
    const div = document.createElement('div');
    div.innerText = message;
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend',div);
  }
}

const valida = new ValidateForm();
