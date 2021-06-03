import React, { forwardRef } from 'react'

import { LabelProps } from './label.types'
import { LabelContainer } from './styled'

export const Label = forwardRef<HTMLInputElement, LabelProps>(
  (forwardedProps, ref) => <LabelContainer {...forwardedProps} ref={ref} />,
)
