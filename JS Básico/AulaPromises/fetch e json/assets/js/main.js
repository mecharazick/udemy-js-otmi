axios('pessoas.json')
    .then(resposta => loadOnPage(resposta.data));

function loadOnPage(json){
    const result = document.querySelector('.resultado');

    const table = document.createElement('table');

    for (let pessoas of json){
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoas.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoas.idade;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = pessoas.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    result.appendChild(table);
}
