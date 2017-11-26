var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
// var webpack = require("webpack");

var entry = [
	"./src/alert/rank.js",
	"./src/alert/recharge.js",
	"./src/alert/prize.js",
	"./src/alert/set.js",
	"./src/alert/help.js",
  "./src/alert/publicone.js",
	"./src/alert/public.js",
	"./src/alert/common.js",
	"./src/alert/result.js",
	"./src/alert/power.js",

	"./src/game/com/game.js",
	"./src/game/com/bet.js",
	"./src/game/com/header.js",
	"./src/game/com/money.js",
	"./src/game/com/notify.js",
	"./src/game/com/odds.js",
	"./src/game/scene.js",

	"./src/start/com/loading.js",
	"./src/start/scene.js",
];
    
module.exports = {
    entry: entry,
    output: {
        path: __dirname + "/bin",
        filename: "main.min.js"
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['latest']
                }
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};