
  import React from "react"

  const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
    React.createElement('svg', {
      ...props,
      dangerouslySetInnerHTML: { __html: `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36 72C16.0912 72 0 55.914 0 36C0 16.091 16.0861 0 36 0C55.909 0 72 16.086 72 36C72 55.9088 55.914 72 36 72Z" fill="url(#paint0_linear)"/>
<path d="M23.3438 52.875V19.125C23.3438 18.347 23.772 17.6322 24.4578 17.2652C25.1436 16.8982 25.976 16.9384 26.6231 17.3698L51.9356 34.2448C52.5225 34.636 52.875 35.2946 52.875 36C52.875 36.7053 52.5226 37.3639 51.9356 37.7551L26.6231 54.6301C25.2373 55.5542 23.3438 54.5727 23.3438 52.875Z" fill="url(#paint1_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="36" y1="72" x2="36" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD3A84"/>
<stop offset="1" stop-color="#FFA68D"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="38.1094" y1="54.9853" x2="38.1094" y2="17.0156" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFC2CC"/>
<stop offset="1" stop-color="#FFF2F4"/>
</linearGradient>
</defs>
</svg>
` },
    })

  PlayIcon.displayName = 'PlayIcon'

  export default PlayIcon
    