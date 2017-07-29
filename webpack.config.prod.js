const webpack = require('webpack');

module.exports = {
    entry: [
        './src/views/lib/main.js'
    ],
    target: 'web',
    output: {
        path: `${__dirname}/public/dist/`,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({ minimize: true, mangle: false, sourcemap: false }),
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