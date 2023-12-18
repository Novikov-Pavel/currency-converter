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
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.(sass|scss)$/gi,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /node_modules/gi,                
            },
            {
                test: /\.css$/gi,
                use: ["style-loader", "css-loader", "sass-loader"],
                include: path.join(__dirname, "node_modules", "react-dropdown"),
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
};
