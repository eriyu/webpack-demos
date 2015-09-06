module.exports = {
  entry: {
    bundle1: './main1.js'
  },
  output: {
    filename: '[name].js'
  },
  module:{
  	loaders:[
  		{ test: /\.css$/, loader: "style!css!autoprefixer" },
  		// { test: /\.(png|jpg|jpeg|gif)$/, loader: "url?limit=10000" }
  		{ test: /\.(png|jpg|jpeg|gif)$/, loader: "file?name=img/[name].[ext]?[hash]" }
  	]
  }
};
