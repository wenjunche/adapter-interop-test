const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        provider: './src/platform-provider.ts',
        pwindow: './src/platform-window.ts'
    },
    output: {
        path: path.resolve(__dirname, './out'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
                title: 'Adapter Interop Test platform-window',
                template: 'public/platform-window.html',
                filename: 'platform-window.html',
                chunks: ['pwindow']
            }),
            new HtmlWebpackPlugin({ 
                title: 'Adapter Interop Test provider',
                template: 'public/provider.html',
                filename: 'provider.html',
                chunks: ['provider']
            }),
        ]
};
