import { Configuration } from "webpack";
import BundleDeclarationsWebpackPlugin from "bundle-declarations-webpack-plugin";

const config : Configuration = {
    experiments: {
        outputModule: true
    },
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: __dirname + '/dist',
        filename: 'index.js',
        chunkFormat: 'module',
        library: {
            type: "module"
        },
        environment: {
            module: true,
        },
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
    },
    externalsType: "module",
    externals: ["react"],
    module: {       
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new BundleDeclarationsWebpackPlugin({
            entry: "./src/index.ts",
            outFile: "index.d.ts"
        })
    ]
}

export default config;

