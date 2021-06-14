import { FC } from 'react'
import { Logo, Button } from 'ui'
import Link from 'next/link'

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
        <Link href="/create-post">
          <Button variant="squared">Create post</Button>
        </Link>
      </Actions>
    </NavigationContainer>
    {children}
  </div>
)
