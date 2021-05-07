import React from 'react'
import {
  Heading,
  Input,
  InputPassword,
  ButtonIcon,
  Button,
  Logo,
  Info,
} from 'ui'
import GoogleIcon from 'ui/dist/icons/Google'

import {
  IndexWrapper,
  LogoContainer,
  Container,
  ButtonsContainer,
} from './styled'

export const Index = () => (
  <IndexWrapper>
    <Container>
      <Heading data-testid="welcome-heading">
        WELCOME TO <span>TERMO ENGLISH</span>
      </Heading>
      <Input type="email" placeholder="Email" data-testid="email-input" />
      <InputPassword placeholder="Password" />
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
      <Logo data-testid="logo" />
    </LogoContainer>
  </IndexWrapper>
)
