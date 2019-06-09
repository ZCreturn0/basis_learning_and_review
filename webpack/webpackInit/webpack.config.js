const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // minimize:开启压缩  已失效...
                use: ['style-loader','css-loader']
            }
        ]
    }
}