function meuEscopo() {
  const form = document.querySelector("form");
  const users = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const user = {
      nome: form.querySelector(".nome").value,
      sobrenome: form.querySelector(".sobrenome").value,
      peso: Number(form.querySelector(".peso").value),
      altura: Number(form.querySelector(".altura").value),
    };
    const resultado = form.querySelector(".resultado");

    users.push(user);

    resultado.innerHTML += `<p>O nome do usuário é ${user.nome} ${user.sobrenome}, tem ${user.altura} metros e pesa ${user.peso}</p>`;
    console.log(users[length - 1]);
  }

  form.addEventListener("submit", recebeEventoForm);
}
