import React from 'react'

import { ButtonIcon } from './button-icon'
import GoogleIcon from '../../icons/Google'

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
}

const Template = (): React.ReactElement => (
  <ButtonIcon icon={<GoogleIcon width="29" height="29" />}>
    Sign In with Google
  </ButtonIcon>
)

export const Default = Template.bind({})
