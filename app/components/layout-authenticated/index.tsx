import { FC } from 'react'
import { Logo, Button } from 'ui'
import { LayoutAuthenticatedProps } from './layout-authenticated.types'

import { NavigationContainer, Actions, Dots } from './styled'

export const LayoutAuthenticated: FC<LayoutAuthenticatedProps> = ({
  children,
  toggleTheme,
}) => (
  <div>
    <NavigationContainer>
      <Logo width="201" height="125" onClick={toggleTheme} />
      <Actions>
        <Button variant="squared">Request post</Button>
        <Button variant="squared">Admin panel</Button>
        <Dots></Dots>
      </Actions>
    </NavigationContainer>
    {children}
  </div>
)
