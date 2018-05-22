const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, './dist/')
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json', '.css' ],
        modules: [ path.join(__dirname, 'node_modules') ]
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.s?css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }]}
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}