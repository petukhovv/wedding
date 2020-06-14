const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: `fonts/[name].[ext]`,
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: `images/[name].[ext]`,
                    }
                }
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'index.html'),
                    to: path.resolve(__dirname, 'dist/index.html')
                },
                {
                    from: path.resolve(__dirname, 'images'),
                    to: path.resolve(__dirname, 'dist/images')
                },
                {
                    from: path.resolve(__dirname, 'fonts'),
                    to: path.resolve(__dirname, 'dist/fonts')
                },
                {
                    from: path.resolve(__dirname, 'js'),
                    to: path.resolve(__dirname, 'dist/js')
                }
            ],
        }),
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.css', '.sass' ],
        alias: {
            css: path.resolve(__dirname, 'css'),
            sass: path.resolve(__dirname, 'sass'),
            js: path.resolve(__dirname, 'js')
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 9000
    }
};