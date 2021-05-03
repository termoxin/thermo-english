import React from 'react'

import { ButtonIcon } from './button-icon'
import { ReactComponent as GoogleIcon } from '../../icons/google.svg'

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
}

const Template = (): React.ReactElement => (
  <ButtonIcon icon={<GoogleIcon />}>Sign In with Google</ButtonIcon>
)

export const Default = Template.bind({})
