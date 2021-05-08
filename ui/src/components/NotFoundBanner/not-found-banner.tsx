import React, { forwardRef } from 'react'

import NotFoundBannerIcon from '../../icons/NotFoundBanner'

export const NotFoundBanner = forwardRef<SVGSVGElement>((props, ref) => (
  <NotFoundBannerIcon width="444" height="223" {...props} ref={ref} />
))
