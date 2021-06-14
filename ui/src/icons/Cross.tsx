
  import React from "react"

  const CrossIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
    React.createElement('svg', {
      ...props,
      dangerouslySetInnerHTML: { __html: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M13.641 11.3581L2.6692 0.386227C2.19069 -0.0922842 1.4149 -0.0922842 0.937135 0.386227L0.358884 0.963582C-0.119628 1.44224 -0.119628 2.21803 0.358884 2.69579L11.3307 13.6676C11.8094 14.1461 12.5852 14.1461 13.0629 13.6676L13.6403 13.0903C14.1197 12.6125 14.1197 11.8366 13.641 11.3581Z" fill="#F44336"/>
<path d="M11.3307 0.387092L0.358884 11.3589C-0.119628 11.8374 -0.119628 12.6134 0.358884 13.0911L0.936237 13.6685C1.4149 14.147 2.19069 14.147 2.66845 13.6685L13.641 2.69741C14.1197 2.21889 14.1197 1.44311 13.641 0.965343L13.0637 0.387989C12.5851 -0.0914197 11.8094 -0.0914197 11.3307 0.387092Z" fill="#F44336"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>
` },
    })

  CrossIcon.displayName = 'CrossIcon'

  export default CrossIcon
    