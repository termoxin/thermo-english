import React, { forwardRef } from 'react'

import { CardProps } from './card.types'
import { CardContainer } from './styled'

export const Card = forwardRef<HTMLInputElement, CardProps>(
  (forwardedProps, ref) => <CardContainer {...forwardedProps} ref={ref} />,
)
