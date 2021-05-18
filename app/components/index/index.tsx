import React, { FC } from 'react'
import { Input, InputPassword, ButtonIcon, Button, Logo, Info } from 'ui'
import GoogleIcon from 'ui/dist/icons/Google'

import { CustomAppProps } from './../../types/app'

import {
  IndexWrapper,
  LogoContainer,
  Container,
  ButtonsContainer,
  StyledHeading,
} from './styled'

export const Index: FC<CustomAppProps> = ({ toggleTheme }) => (
  <IndexWrapper>
    <Container>
      <StyledHeading data-testid="welcome-heading">
        WELCOME TO <span>TERMO ENGLISH</span>
      </StyledHeading>
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
      <Logo data-testid="logo" width="201" height="125" onClick={toggleTheme} />
    </LogoContainer>
  </IndexWrapper>
)
