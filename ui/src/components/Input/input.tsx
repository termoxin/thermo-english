import React, { forwardRef } from 'react'

import { BaseInput } from './styled'
import { InputProps } from './input.types'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (forwardedProps, ref) => <BaseInput {...forwardedProps} ref={ref} />,
)
