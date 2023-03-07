const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode: "development", 
    entry: "./index.js", 
    output: {
        path: path.resolve(__dirname, "./public/frontend"),
        publicPath: '/',
        filename: "main.js"
    },
    target: "web",
    devServer: {
        port: "3000",
        static: ["./public"],
        open: true,
        hot: true ,
        liveReload: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:  'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'public', 'index.html')
        })
    ]
};