const beaba = {'1':{'1':'2', '3':'4', id:1}, '3':{'1':'2', '3':'4', id:2}, id:{'1':'2', '3':'4', id:3}};

for (let id in beaba){
    if(beaba.hasOwnProperty(id)){
        console.log(`${id} e ${beaba[id][id]}`);
    }
}