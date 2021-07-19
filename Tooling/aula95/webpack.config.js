const path = require('path'); //Node utiliza CommonJS para sistema de módulos que é diferente do ES6

//Esse arquivo tem seu próprio espaço, por isso o que não for exported não pode ser usado fora dele.
/*Além disso ele deve ficar na raíz do projeto e contém um template para o webpack*/
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets','js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/, //Esse cifrão indica que o fim do nome do arquivo é o que está escrito e a barra invertida é o escape do caracter ponto
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            exclude: /node_modules/,
            test: /.css$/,
            
        }]
    },
    devtool: 'source-map' //Faz um mapeamento do código para indicar em que módulo ocorreu o erro mostrado no bundle
}
