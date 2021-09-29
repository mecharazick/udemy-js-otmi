import './assets/css/style.css';
import GenCpf from './modules/GenCpf';

(function() {
    const gen = new GenCpf();
    const genCpf = document.querySelector('.result');
    const btn = document.querySelector('.btn');
    
    document.addEventListener('click', e =>{
        const el = e.target;
        if(e.target.classList.contains('btn')){
            genCpf.innerHTML = gen.genNewCpf();
        }
    })

    genCpf.innerHTML = 'Awaiting for click...';

    
})();

