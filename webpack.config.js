const path = require("path");
module.exports = {
    entry: {
        index: ['./Main.jsx']
    },
    output: {
        filename: 'bundle.js',
        path:   path.resolve(__dirname, './')
    },
    module: {
        rules: [
            {test: /.jsx$/, exclude: /node_modules/, use:{loader: 'babel-loader', options: {presets: ['@babel/preset-react', '@babel/preset-env']}}},
            {test: /.js$/,  exclude: /node_modules/, use:{loader: 'babel-loader', options: {presets: ['@babel/preset-env']}}},
            {test: /.css$/, exclude: /node_modules/, use:['style-loader', 'css-loader']}
        ]
    },
    devServer:{
        port:8083
    }
}