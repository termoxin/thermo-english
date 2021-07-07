import React, { FC, useState } from 'react'
import { Input, InputPassword, ButtonIcon, Button, Logo, Info } from 'ui'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import firebase from 'firebase'

import GoogleIcon from 'ui/dist/icons/Google'

import {
  IndexWrapper,
  LogoContainer,
  Form,
  ButtonsContainer,
  StyledHeading,
  FieldError,
} from './styled'

import { CustomAppProps } from '../../../types/app'
import { AuthenticationFormFields } from './index.types'
import { schema } from './schema'
import { useRouter } from 'next/router'

export const Index: FC<CustomAppProps> = ({ toggleTheme }) => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticationFormFields>({ resolver: yupResolver(schema) })

  const { push } = useRouter()

  const [authErrorMessage, setAuthErrorMessage] = useState<string | null>(null)

  const onSignIn = async () => {
    try {
      const { email, password } = getValues()
      const auth = firebase.auth()

      if (email && password && !Object.values(errors).length) {
        await auth.signInWithEmailAndPassword(email, password)

        push('/posts')
      }
    } catch (err) {
      setAuthErrorMessage(err.message)
    }
  }

  const onSignUp = async () => {
    try {
      const { email, password } = getValues()
      const auth = firebase.auth()

      if (email && password) {
        await auth.createUserWithEmailAndPassword(email, password)

        push('/posts')
      }
    } catch (err) {
      setAuthErrorMessage(err.message)
    }
  }

  const { email, password } = errors

  return (
    <IndexWrapper>
      <Form onSubmit={handleSubmit(() => {})}>
        <StyledHeading data-testid="welcome-heading">
          WELCOME TO <span>TERMO ENGLISH</span>
        </StyledHeading>
        {authErrorMessage && <FieldError>{authErrorMessage}</FieldError>}
        {email && <FieldError>{email.message}</FieldError>}
        <Input
          placeholder="Email"
          data-testid="email-input"
          {...register('email', { required: true })}
        />
        {password && <FieldError>{password.message}</FieldError>}
        <InputPassword
          placeholder="Password"
          {...register('password', { min: 6, max: 99 })}
        />
        <ButtonsContainer>
          <ButtonIcon icon={<GoogleIcon width="29" height="29" />}>
            Sign In with Google
          </ButtonIcon>
          <Button onClick={onSignUp}>Sign Up</Button>
          <Button onClick={onSignIn}>Sign In</Button>
        </ButtonsContainer>
        <Info>Terms and Conditions · Privacy Policy</Info>
      </Form>
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
