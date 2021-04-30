import React, { FC, useState } from 'react'

import { Input } from '../Input'
import { ReactComponent as CrossedEye } from '../../icons/crossed-eye.svg'
import { ReactComponent as Eye } from '../../icons/eye.svg'

import { InputPasswordProps } from './input-password.types'
import { VisibilityIconContainer, InputPasswordContainer } from './styled'

export const InputPassword: FC<InputPasswordProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  const inputType = showPassword ? 'text' : 'password'

  return (
    <InputPasswordContainer>
      <Input
        type={inputType}
        data-testid="input-password"
        role="input-password"
      />
      <VisibilityIconContainer>
        {showPassword ? (
          <Eye
            height="24"
            width="24"
            onClick={() => setShowPassword(false)}
            data-testid="hide-password"
          />
        ) : (
          <CrossedEye
            height="24"
            width="24"
            onClick={() => setShowPassword(true)}
            data-testid="show-password"
          />
        )}
      </VisibilityIconContainer>
    </InputPasswordContainer>
  )
}
