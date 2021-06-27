import React, { FC } from 'react'
import { Input, InputPassword, ButtonIcon, Button, Logo, Info } from 'ui'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import GoogleIcon from 'ui/dist/icons/Google'

import {
  IndexWrapper,
  LogoContainer,
  Container,
  ButtonsContainer,
  StyledHeading,
} from './styled'

import { CustomAppProps } from '../../../types/app'
import { AuthenticationFormFields } from './index.types'
import { schema } from './schema'

export const Index: FC<CustomAppProps> = ({ toggleTheme }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data: AuthenticationFormFields) => {}

  return (
    <IndexWrapper>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <StyledHeading data-testid="welcome-heading">
          WELCOME TO <span>TERMO ENGLISH</span>
        </StyledHeading>
        <Input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          {...register('email', { required: true })}
        />
        <InputPassword
          placeholder="Password"
          {...register('password', { min: 6, max: 99 })}
        />
        <ButtonsContainer>
          <ButtonIcon icon={<GoogleIcon width="29" height="29" />}>
            Sign In with Google
          </ButtonIcon>
          <Button>Sign Up</Button>
          <Button>Sign In</Button>
        </ButtonsContainer>
        <Info>Terms and Conditions · Privacy Policy</Info>
      </Container>
      <LogoContainer>
        <Logo
          data-testid="logo"
          width="201"
          height="125"
          onClick={toggleTheme}
        />
      </LogoContainer>
    </IndexWrapper>
  )
}
