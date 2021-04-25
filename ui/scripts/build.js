require('../../.pnp.cjs').setup()

const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp')
const { build } = require('esbuild')
const path = require('path')

const entryPoint = path.join('./', 'components/Button.tsx')

const buildProject = async () => {
  await build({
    entryPoints: [entryPoint],
    bundle: true,
    outfile: 'dist/index.js',
    plugins: [pnpPlugin()],
  })
}

buildProject()
