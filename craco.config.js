const sassResourcesLoader = require('craco-sass-resources-loader');


module.exports = {
    mode: process.env.NODE_ENV,
    output: {
        path: __dirname,
    },
    style: {
        css: {
            loaderOptions: {
                modules: {
                    auto: true,
                    exportLocalsConvention: 'camelCaseOnly',
                },
            },
        },
    },
    plugins: [
        {
            plugin: sassResourcesLoader,
            options: {
                resources: [
                    './src/assets/_config.scss',
                ]
            },
        },
    ],
    devServer: (devServerConfig, {}) => {
        return {
            ...devServerConfig
        };
    },
};
