require('../../.pnp.cjs').setup()

const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp')
const { build } = require('esbuild')
const glob = require('tiny-glob')

const excludeFilesWithExtension = ['.test.tsx', '.test.ts']

const buildProject = async () => {
  const entryPoints = await glob('src/**/*.{ts,tsx}')

  const filteredEntryPoints = entryPoints.filter(
    (file) =>
      !excludeFilesWithExtension
        .map((excludeExt) => file.endsWith(excludeExt))
        .some(Boolean),
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
