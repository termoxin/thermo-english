import React from 'react'
declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const content: string

  export { ReactComponent }
  export default content
}

declare module '*.mp4'
declare module '*.jpeg'
