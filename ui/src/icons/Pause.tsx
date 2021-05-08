
  import React from "react"

  const PauseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
    React.createElement('svg', {
      ...props,
      dangerouslySetInnerHTML: { __html: `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M72 36C72 55.8581 55.8581 72 36 72C16.1419 72 0 55.8581 0 36C0 16.1419 16.1419 0 36 0C55.8581 0 72 16.1419 72 36Z" fill="#F73974"/>
<path d="M36 0C55.8581 0 72 16.1419 72 36C72 55.8581 55.8581 72 36 72" fill="#DD0772"/>
<path d="M10.5679 10.5675C24.6195 -3.48409 47.3808 -3.48409 61.4324 10.5675C75.484 24.6191 75.484 47.3804 61.4324 61.432" fill="#ED266E"/>
<path d="M27.2904 27.8711C25.5485 27.8711 24.3872 29.2646 24.3872 30.8904V47.7292C24.3872 49.4711 25.5485 50.8646 27.2904 50.8646C29.0324 50.8646 30.1937 49.4711 30.1937 47.7292V30.8904C30.1937 29.2646 29.0324 27.8711 27.2904 27.8711Z" fill="#DD0772"/>
<path d="M44.7099 27.8711C42.9679 27.8711 41.8066 29.2646 41.8066 30.8904V47.7292C41.8066 49.4711 42.9679 50.8646 44.7099 50.8646C46.4518 50.8646 47.6131 49.4711 47.6131 47.7292V30.8904C47.6131 29.2646 46.4518 27.8711 44.7099 27.8711Z" fill="#DD0772"/>
<path d="M27.2904 24.5034C25.5485 24.5034 24.3872 25.897 24.3872 27.6389V44.4776C24.3872 46.2195 25.5485 47.6131 27.2904 47.6131C29.0324 47.6131 30.1937 46.2195 30.1937 44.4776V27.5228C30.1937 25.897 29.0324 24.5034 27.2904 24.5034Z" fill="white"/>
<path d="M44.7099 24.5034C42.9679 24.5034 41.8066 25.897 41.8066 27.6389V44.4776C41.8066 46.2195 42.9679 47.6131 44.7099 47.6131C46.4518 47.6131 47.6131 46.2195 47.6131 44.4776V27.5228C47.6131 25.897 46.4518 24.5034 44.7099 24.5034Z" fill="white"/>
</svg>
` },
    })

  PauseIcon.displayName = 'PauseIcon'

  export default PauseIcon
    