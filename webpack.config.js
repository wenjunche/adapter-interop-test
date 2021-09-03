const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        provider: './src/platform-provider.ts',
        pwindow: './src/platform-window.ts',
        pview: './src/platform-view.ts'
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
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
            new HtmlWebpackPlugin({ 
                title: 'Adapter Interop Test provider',
                template: 'public/provider.html',
                filename: 'provider.html',
                chunks: ['provider']
            }),
            new HtmlWebpackPlugin({ 
                title: 'Adapter Interop Test platform-window',
                template: 'public/platform-window.html',
                filename: 'platform-window.html',
                chunks: ['pwindow']
            }),
            new HtmlWebpackPlugin({ 
                title: 'Adapter Interop Test platform-view',
                template: 'public/platform-view.html',
                filename: 'platform-view.html',
                chunks: ['pview']
            })
        ]
};
