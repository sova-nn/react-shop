const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output:{
        path: path.resolve(__dirname, "./public"),
        publicPath: "/public/",
        filename: "bundle.js",
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "/"),
        },
        port: 8081,
        open: true
    },
    module:{
        rules:[
            // {
            //     test: /\.ts$/,
            //     exclude: /(node_modules)/,
            //     loader: "ts-loader",
            // },
            { test: /\\.tsx$/, use: 'raw-loader' }
        ],
    }
}