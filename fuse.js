const { FuseBox, BabelPlugin, QuantumPlugin } = require('fuse-box')

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'build/$name.js',
  plugins: [
    BabelPlugin(),
    QuantumPlugin({
      uglify: true,
    }),
  ],
})

fuse.bundle('vendor').instructions('~ client.tsx')
fuse.bundle('client').instructions('!> [client.tsx]')

fuse.run()
