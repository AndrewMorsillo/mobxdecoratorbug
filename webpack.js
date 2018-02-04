const path = require("path")


module.exports = {
    context: __dirname,
    devtool: "eval",
    entry: ["./index.ts"],
    output: {
        filename: "index.js",
        chunkFilename: "[name].js",
        path: path.resolve(__dirname, 'build')
    },
    plugins: [],
    module: {
        rules: [

            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [["es2015", { loose: true, modules: false }], "stage-1"],
                            plugins: ["transform-decorators-legacy"],

                        }
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
            }

        ]
    },

    resolve: {
        extensions: [".ts"]
    },

}



