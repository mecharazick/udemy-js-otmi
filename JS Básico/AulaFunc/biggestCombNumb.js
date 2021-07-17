function descendingOrder(n){
    const ar = n.toString().split('').map(valor => Number(valor));
    return Number(ar.sort((a,b) => b-a).join(''));
}

console.log(descendingOrder(128379012));