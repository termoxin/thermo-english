require('../../.pnp.cjs').setup()

const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp')
const { build } = require('esbuild')
const glob = require('tiny-glob')

const buildProject = async () => {
  const entryPoints = await glob('src/**/*.{ts,tsx}')
  const excludedFiles = await glob('src/**/*.{test,stories}.{ts,tsx}')

  const excludedFilesSet = new Set(excludedFiles)

  const filteredEntryPoints = entryPoints.filter(
    (entryPoint) => !excludedFilesSet.has(entryPoint),
  )

  await build({
    entryPoints: filteredEntryPoints,
    platform: 'neutral',
    format: 'esm',
    outdir: 'dist',
    plugins: [pnpPlugin()],
  })
}

buildProject()
