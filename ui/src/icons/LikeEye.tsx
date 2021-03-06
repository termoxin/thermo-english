
  import React from "react"

  const LikeEyeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
    React.createElement('svg', {
      ...props,
      dangerouslySetInnerHTML: { __html: `<svg width="71" height="68" viewBox="0 0 71 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i)">
<ellipse cx="35.5" cy="34" rx="35.5" ry="34" fill="#C4C4C4"/>
</g>
<ellipse rx="16.4267" ry="15.6926" transform="matrix(0.999832 -0.0183461 0.0201034 0.999798 34.9913 33.4271)" fill="white"/>
<ellipse rx="5.47556" ry="5.23086" transform="matrix(0.999832 -0.0183461 0.0201034 0.999798 33.2541 31.4233)" fill="black"/>
<defs>
<filter id="filter0_i" x="0" y="0" width="71" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
</defs>
</svg>
` },
    })

  LikeEyeIcon.displayName = 'LikeEyeIcon'

  export default LikeEyeIcon
    