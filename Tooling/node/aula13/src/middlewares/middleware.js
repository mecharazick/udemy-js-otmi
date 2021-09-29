module.exports.middleWareGlobal = (req, res, next) => {
    
    // if(req.body.name){
    //     console.log();
    //     console.log(`A sessão de ${req.body.name} está ativa`);
    //     console.log();
    // }

    next();
}