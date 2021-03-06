var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: './src/main.ts',
    output: {
        path:'./dist',
        filename: 'app.bundle.js'
    },
    module:{
        loaders:[
            {test:/\.ts$/, loader:'ts'},
            {test:/\.scss$/, loader:'raw!sass'}
        ]
    },
    resolve:{
        extensions: ['', '.js', '.ts']
    },
    plugins : [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
        app: {
                environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
            }
        })
    ]
};

 