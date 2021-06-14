
  import React from "react"

  const TickIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
    React.createElement('svg', {
      ...props,
      dangerouslySetInnerHTML: { __html: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M5.36085 12.2297C5.22721 12.3642 5.04489 12.4392 4.85549 12.4392C4.66609 12.4392 4.48376 12.3642 4.35012 12.2297L0.314135 8.19309C-0.104712 7.77424 -0.104712 7.09505 0.314135 6.67699L0.819501 6.17149C1.23848 5.75265 1.91688 5.75265 2.33573 6.17149L4.85549 8.69138L11.6642 1.88249C12.0832 1.46365 12.7623 1.46365 13.1805 1.88249L13.6858 2.38799C14.1047 2.80684 14.1047 3.4859 13.6858 3.90409L5.36085 12.2297Z" fill="#53B175"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>
` },
    })

  TickIcon.displayName = 'TickIcon'

  export default TickIcon
    