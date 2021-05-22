import { FC } from 'react'
import { Logo, Button } from 'ui'

import { NavigationContainer, Actions, Dots } from './styled'

export const LayoutAuthenticated: FC = ({ children }) => (
  <div>
    <NavigationContainer>
      <Logo width="201" height="125" />
      <Actions>
        <Button variant="squared">Request post</Button>
        <Button variant="squared">Admin panel</Button>
        <Dots></Dots>
      </Actions>
    </NavigationContainer>
    {children}
  </div>
)
