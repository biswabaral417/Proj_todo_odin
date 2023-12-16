const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path=require('path')
const express = require('express')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        historyApiFallback: true,
        static:{
           directory: path.join(__dirname, 'src'), 
        },
       
   
    },
});