import React, { forwardRef, InputHTMLAttributes } from 'react'

import { BaseInput } from './styled'

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((forwardedProps, ref) => <BaseInput {...forwardedProps} ref={ref} />)
