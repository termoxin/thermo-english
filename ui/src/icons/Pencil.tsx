
  import React from "react"

  const PencilIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
    React.createElement('svg', {
      ...props,
      dangerouslySetInnerHTML: { __html: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M8.64576 2.35156L0.942758 10.0551C0.904005 10.094 0.876022 10.1431 0.862697 10.1958L0.00889325 13.6228C-0.0166465 13.726 0.0136681 13.8357 0.0889547 13.9109C0.145919 13.9679 0.223538 13.9994 0.302933 13.9994C0.327251 13.9994 0.352125 13.9965 0.376332 13.9903L3.80332 13.1364C3.85673 13.1231 3.90525 13.0952 3.94401 13.0565L11.6477 5.35348L8.64576 2.35156Z" fill="#FFC24E"/>
<path d="M13.5561 1.30075L12.6986 0.44328C12.1255 -0.129809 11.1267 -0.129253 10.5543 0.44328L9.50391 1.49363L12.5057 4.49543L13.5561 3.44509C13.8423 3.15893 14 2.77805 14 2.37297C14 1.96789 13.8423 1.58702 13.5561 1.30075Z" fill="#FFC24E"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>
` },
    })

  PencilIcon.displayName = 'PencilIcon'

  export default PencilIcon
    