//Request de um outro html para ser carregado em um elemento na página atual
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

    try{
        const page = await fetch(href);
        if (page.status !== 200) throw new Error('Errow');
        const html = await page.text();
        loadResult(html);
    }catch(e){
        console.log(e);
    }
}

function loadResult(response){
    const result = document.querySelector('.resultado');
    result.innerHTML = response;
}