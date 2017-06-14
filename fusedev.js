const { FuseBox, BabelPlugin, ReplacePlugin } = require('fuse-box')

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'build/$name.js',
  plugins: [
    BabelPlugin(),
    /*
    QuantumPlugin({
      uglify: false,
    })
    */
  ],
})

fuse.bundle('client').instructions('!> [client.tsx]')

fuse.bundle('vendor').instructions('~ client.tsx')

fuse.run()
