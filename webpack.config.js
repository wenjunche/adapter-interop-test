const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  
const path = require('path');

module.exports = (env, argv) => {

    const rootUrl = argv.mode === 'development' ? 'http://localhost:5555' : 'https://testing-assets.openfin.co/adapters/interop';

    return {
    entry: {
        provider: './src/platform-provider.ts',
        pwindow: './src/platform-window.ts',
        pview: './src/platform-view.ts'
    },
    output: {
        path: path.resolve(__dirname, './out'),
        filename: '[name].[contenthash].js'
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
            new CleanWebpackPlugin(),
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
            }),
            new CopyPlugin(
                {
                    patterns: [
                        { from: 'public/favicon.ico' },
                        { from: 'public/app.json',
                          transform: (content) => {
                              const json = content.toString();
                              return json.replace(/\${APP_ROOT_URL}/g, rootUrl);
                          } }
                    ]
                }
            )
        ]
    }
};
