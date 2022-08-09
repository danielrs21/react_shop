const loader = require("html-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports ={
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            '@hooks': path.resolve(__dirname, '/src/hooks'),
            '@components': path.resolve(__dirname, '/src/components'),
            '@containers': path.resolve(__dirname, '/src/containers'),
            '@pages': path.resolve(__dirname, '/src/pages'),
            '@routes': path.resolve(__dirname, '/src/routes'),
            '@styles': path.resolve(__dirname, '/src/styles'),
            '@assets': path.resolve(__dirname, '/src/assets'),
            '@icons': path.resolve(__dirname, '/src/assets/icons'),
            '@logos': path.resolve(__dirname, '/src/assets/logos'),
        }
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
    ],
    devServer: {
        historyApiFallback: true,
        //static: path.join(__dirname, "dist"),
        //port: 3005,
    }
}