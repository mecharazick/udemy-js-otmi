function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
      this.pressEnter();
    },

    pressEnter() {
      document.addEventListener("keyup", function (e){
        if (e.key === "Enter") {
          this.calculate();
        }
      }.bind(this));
    },

    cliqueBotoes() {
      document.addEventListener(
        "click",
        function (e) {
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
        }.bind(this)
      );
    },

    calculate() {
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
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
      this.display.focus();
    },

    clearDisplay() {
      this.display.value = "";
      this.display.focus();
    },

    delItemDis() {
      this.display.value = this.display.value.slice(0, -1);
      this.display.focus();
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
