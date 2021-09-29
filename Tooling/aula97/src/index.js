import "./assets/css/style.css";
import GenRandPass from "./modules/GenRandPass";

(function () {
  const output = document.querySelector(".result");
  const qtd = document.querySelector(".num-qtd");
  const chkBoxes = document.querySelectorAll(".chkbox");
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    const pass = gen();
    output.innerHTML = pass || "Operação inválida";
  });

  function gen() {
    const par = {
      size: parseInt(qtd.value),
      num: chkBoxes[0].checked,
      upl: chkBoxes[1].checked,
      lwl: chkBoxes[2].checked,
      spc: chkBoxes[3].checked,
    };
    if (par.size <= 0 || par.size > 50) {
      output.innerHTML = "Insira um número de caracteres válido";
      return;
    }
    return GenRandPass(par);
  }
})();
