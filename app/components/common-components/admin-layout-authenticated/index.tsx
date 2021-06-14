import { FC } from 'react'
import { Logo, Button } from 'ui'
import { AdminLayoutAuthenticatedProps } from './admin-layout-authenticated.types'

import { NavigationContainer, Actions } from './styled'

export const AdminLayoutAuthenticated: FC<AdminLayoutAuthenticatedProps> = ({
  children,
  toggleTheme,
}) => (
  <div>
    <NavigationContainer>
      <Logo width="160" height="100" onClick={toggleTheme} />
      <Actions>
        <Button variant="squared">Create post</Button>
      </Actions>
    </NavigationContainer>
    {children}
  </div>
)
