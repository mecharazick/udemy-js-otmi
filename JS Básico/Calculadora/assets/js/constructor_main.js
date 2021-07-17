function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = function () {
    this.cliqueBotoes();
    this.pressEnter();
  };

  this.pressEnter = function () {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.calculate();
      }
    });
  };

  this.cliqueBotoes = function () {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) {
        this.btnParaDisplay(el.innerText);
      }
      if (el.classList.contains("btn-clear")) {
        this.clearDisplay();
      }
      if (el.classList.contains("btn-del")) {
        this.delItemDis();
      }
      if (el.classList.contains("btn-eq")) {
        this.calculate();
      }
    });
  };

  this.calculate = function () {
    let conta = this.display.value;

    try {
      conta = eval(conta);
      if (!conta) {
        alert("Conta inválida!");
        return;
      }
      this.display.value = String(conta);
      this.display.focus();
    } catch (e) {
      alert("Conta inválida!");
      return;
    }
  };

  this.btnParaDisplay = function (valor) {
    this.display.value += valor;
    this.display.focus();
  };

  this.clearDisplay = function () {
    this.display.value = "";
    this.display.focus();
  };

  this.delItemDis = function () {
    this.display.value = this.display.value.slice(0, -1);
    this.display.focus();
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
