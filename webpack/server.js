const webpack          = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const paths            = require('../paths');

const server = {
  port: 8000,
  domain: 'localhost'
};

const config = require( './webpack.development' )( paths, server );

new WebpackDevServer(webpack( config ), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  inline: true,
  stats: {
    colors: true
  },
  headers: { 'Access-Control-Allow-Origin': '*' }
}).listen( server.port, server.domain, ( err ) => {
  if ( err ) {
    xa.error( err );
  }
});