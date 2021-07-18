//Request de um outro html para ser carregado em um elemento na página atual
const request = obj => {
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send(null);
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status <300){
                resolve(xhr.responseText);
            } else {
                reject({
                    code:xhr.status,
                    msg: xhr.statusText
                });
            }
        });});
};

document.addEventListener('click', event =>{
    const el = event.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a'){
        event.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el){
    const href = el.getAttribute('href');

    const objConfig = {
        method:'GET',
        url: href
    };

    try{
    const response = await request(objConfig);
    loadResult(response);
    }catch(e){
        console.log(e);
    }
}

function loadResult(response){
    const result = document.querySelector('.resultado');
    result.innerHTML = response;
}