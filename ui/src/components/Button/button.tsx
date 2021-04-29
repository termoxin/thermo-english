import React, { FC } from 'react'
import { DefaultTheme, StyledComponentBase } from 'styled-components'

import { ButtonProps, buttonVarients, buttonVarientsEnum } from './button.types'
import { PrimaryButton, BaseButton } from './styled'

const buttonsDictionary: Record<
  buttonVarients,
  StyledComponentBase<'button', DefaultTheme, {}, never>
> = {
  primary: PrimaryButton,
}

export const Button: FC<ButtonProps> = ({
  variant = buttonVarientsEnum.PRIMARY,
  ...props
}) => {
  const varients = Object.values(buttonVarientsEnum) as buttonVarients[]

  if (!varients.includes(variant)) {
    return <BaseButton {...props} />
  }

  const ButtonComponent = buttonsDictionary[variant]

  return <ButtonComponent {...props} />
}
