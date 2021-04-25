require('../../.pnp.cjs').setup()

const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp')
const { build } = require('esbuild')
const path = require('path')

const entryPoint = path.join('./', 'src/components/Button.tsx')

const buildProject = async () => {
  await build({
    entryPoints: [entryPoint],
    outfile: 'dist/index.js',
    plugins: [pnpPlugin()],
  })
}

buildProject()
