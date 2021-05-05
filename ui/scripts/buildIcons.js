require('../../.pnp.cjs').setup()

const { promises: fs } = require('fs')
const glob = require('tiny-glob')
const path = require('path')

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

const camelize = (s) =>
  capitalizeFirstLetter(s.replace(/-./g, (x) => x.toUpperCase()[1]))

const compose = (...fns) =>
  fns.reduceRight(
    (prevFn, nextFn) => (...args) => nextFn(prevFn(...args)),
    (value) => value,
  )

const last = (array) => array.slice(-1)[0]
const getIconName = (fileName) => fileName.split('.')[0]
const getNesting = (iconPath) => iconPath.split('/')

const getComponentNameFromPath = compose(
  camelize,
  getIconName,
  last,
  getNesting,
)

const readSvg = (path) => fs.readFile(path).then((buffer) => buffer.toString())

const createIconComponent = (name, content) => `
  import React from "react"

  const ${name}Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
    React.createElement('svg', {
      ...props,
      dangerouslySetInnerHTML: { __html: ${`${'`' + content + '`'}`} },
    })

  ${name}Icon.displayName = '${name}Icon'

  export default ${name}Icon
    `

const buildIcons = async () => {
  const icons = await glob('src/icons/svgs/**/*.{svg}')

  for await (let iconPath of icons) {
    const svgContent = await readSvg(iconPath)

    const componentName = getComponentNameFromPath(iconPath)

    const plainTextComponent = createIconComponent(componentName, svgContent)

    await fs.writeFile(
      path.resolve(`src/icons/${componentName}.tsx`),
      plainTextComponent,
    )
  }
}

buildIcons()
