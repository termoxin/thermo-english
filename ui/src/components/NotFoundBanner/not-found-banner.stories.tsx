import React from 'react'

import { NotFoundBanner } from './not-found-banner'

export default {
  title: 'NotFoundBanner',
  component: NotFoundBanner,
}

const Template = (): React.ReactElement => <NotFoundBanner />

export const Default = Template.bind({})
