import React from 'react'

import { Story } from '@storybook/react'
import { QuestionsBuilder, QuestionsBuilderProps } from './'
import { props } from './questions-builder.mock'

export default {
  title: 'QuestionsBuilder',
  component: QuestionsBuilder,
}

const Template: Story<QuestionsBuilderProps> = (args): React.ReactElement => {
  return <QuestionsBuilder {...args} />
}

export const Default = Template.bind({})

Default.args = props
