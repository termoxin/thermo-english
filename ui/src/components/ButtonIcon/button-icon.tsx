import React, { FC } from 'react'

import { ButtonIconProps } from './button-icon.types'
import { StyledButton } from './styled'

export const ButtonIcon: FC<ButtonIconProps> = ({
  icon,
  children,
  ...props
}) => (
  <StyledButton {...props}>
    {React.cloneElement(icon, { 'data-testid': 'icon' })}
    {children}
  </StyledButton>
)
