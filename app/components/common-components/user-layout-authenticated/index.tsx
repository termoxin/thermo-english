import { FC } from 'react'
import { Logo, Button } from 'ui'
import { LayoutAuthenticatedProps } from './layout-authenticated.types'

import {
  NavigationContainer,
  Actions,
  Dots,
  LayoutAuthenticatedContainer,
} from './styled'

export const LayoutAuthenticated: FC<LayoutAuthenticatedProps> = ({
  children,
  toggleTheme,
}) => (
  <LayoutAuthenticatedContainer>
    <NavigationContainer>
      <Logo width="160" height="100" onClick={toggleTheme} />
      <Actions>
        <Button variant="squared">Request post</Button>
        <Button variant="squared">Admin panel</Button>
        <Dots />
      </Actions>
    </NavigationContainer>
    {children}
  </LayoutAuthenticatedContainer>
)
