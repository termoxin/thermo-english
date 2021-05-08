import React, { FC, useState } from 'react'

import { Input } from '../Input'
import CrossedEye from '../../icons/CrossedEye'
import Eye from '../../icons/Eye'

import { InputPasswordProps } from './input-password.types'
import { VisibilityIconContainer, InputPasswordContainer } from './styled'

export const InputPassword: FC<InputPasswordProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  const inputType = showPassword ? 'text' : 'password'

  return (
    <InputPasswordContainer>
      <Input
        {...props}
        type={inputType}
        data-testid="password-input"
        role="password-input"
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
