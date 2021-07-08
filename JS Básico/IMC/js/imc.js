const form = document.querySelector(".form");
form.addEventListener("submit", getData);

function getData(evento) {
  evento.preventDefault();
  const pessoa = {
    peso: null,
    alturaEmM: null,
    imc: null,
    setIMC(peso, altura) {
      this.imc = (peso / Math.pow(altura, 2)).toFixed(2);
    },
    getIMC() {
      return this.imc;
    },
  };

  pessoa.peso = Number(document.getElementById("input-peso").value);
  pessoa.alturaEmM = Number(document.getElementById("input-altura").value);
  pessoa.setIMC(pessoa.peso, pessoa.alturaEmM);

  if (!pessoa.peso) {
    setResultado("Peso inserido inválido", false);
    return;
  }
  if (!pessoa.alturaEmM) {
    setResultado("Altura inserida inválida", false);
    return;
  }
  const msg = `Você está com ${nivelIMC(pessoa.imc)} com IMC de ${pessoa.imc}`;

  setResultado(msg, true);

  function createP() {
    const p = document.createElement("p");
    return p;
  }

  function setResultado(msg, isValid) {
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = "<br />";

    const p = createP();
    if (isValid) {
      p.classList.add("correct-input-text");
    }
    if (!isValid) {
      p.classList.add("wrong-input-text");
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
    btnSuccess(form);
  }

  function nivelIMC(imc) {
    const nivel = [
      "abaixo do peso",
      "peso normal",
      "sobrepeso",
      "Obesidade grau 1",
      "Obesidade grau 2",
      "Obesidade grau 3",
    ];
    if (imc >= 39.9) {
      return nivel[5];
    }
    if (imc >= 34.9) {
      return nivel[4];
    }
    if (imc >= 29.9) {
      return nivel[3];
    }
    if (imc >= 24.9) {
      return nivel[2];
    }
    if (imc >= 18.5) {
      return nivel[1];
    } else {
      return nivel[0];
    }
  }

  function btnSuccess(form){
    const btn = form.querySelector('.btn');
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-success');
  }
}
