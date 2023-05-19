const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const development = process.env.NODE_ENV === "development";

module.exports = {
    mode: development ? "development" : "production",
    entry: "./src/index.tsx",
    output: {
        filename: development ? "[name].[contenthash].js" : "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    target: "web",
    resolve: { extensions: [".js", ".jsx", ".ts", ".tsx", ".json"] },
    devServer: {
        port: 5000,
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        open: true,
        hot: true,
        liveReload: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/gi,
                exclude: /node_modules/gi,
                use: "ts-loader",
            },
            {
                test: /\.(sass|scss)$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /node_modules/gi,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
                include: path.join(__dirname, 'node_modules', 'react-dropdown')
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
};
