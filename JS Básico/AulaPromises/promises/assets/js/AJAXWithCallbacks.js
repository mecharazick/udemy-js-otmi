//Request de um outro html para ser carregado em um elemento na página atual
const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send(null);
    //Essa forma de chamar utiliza de callbacks para ordenar a execução das funções
    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status <300){
            obj.success(xhr.responseText);
        } else {
            obj.error({
                code:xhr.status,
                msg: xhr.statusText
            });
        }
    });
};

document.addEventListener('click', event =>{
    const el = event.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a'){
        event.preventDefault();
        carregaPagina(el);
    }
})

function carregaPagina(el){
    const href = el.getAttribute('href');

    request({
        method:'GET',
        url: href,

        success(response){
            loadResult(response);
        },
        error(errorText){
            console.log(errorText);
        }
    });
}

function loadResult(response){
    const result = document.querySelector('.resultado');
    result.innerHTML = response;
}