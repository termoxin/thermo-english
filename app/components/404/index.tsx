import React from 'react'

import { Logo, NotFoundBanner, Heading } from 'ui'
import {
  NotFoundContainer,
  NotFoundBannerContainer,
  LogoContainer,
} from './styled'

export const NotFound = () => (
  <NotFoundContainer>
    <NotFoundBannerContainer>
      <Heading>NOT FOUND</Heading>
      <NotFoundBanner data-testid="not-found-svg" />
    </NotFoundBannerContainer>
    <LogoContainer>
      <Logo height="125" width="201" data-testid="logo" />
    </LogoContainer>
  </NotFoundContainer>
)
