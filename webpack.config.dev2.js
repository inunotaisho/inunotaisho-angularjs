const webpack = require('webpack');

module.exports = {
    watch: true,
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/views/lib/main.js'
    ],
    target: 'web',
    output: {
        path: `${__dirname}/public/dist/`,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module:{
        rules: [{
            test: /\.html$/,
            use: [{
                loader: 'raw-loader'
            }],
        }, {
            test: /\.js$/, 
            use: [{
                loader: 'babel-loader'
            }]
        }]
    }
}