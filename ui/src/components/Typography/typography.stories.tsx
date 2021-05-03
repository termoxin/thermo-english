import React from 'react'

import { Heading as H, Info as Information, Paragraph as P } from './styled'

export default {
  title: 'Typography',
}

const HeadingTemplate = (): React.ReactElement => <H>Heading</H>

export const Heading = HeadingTemplate

const InfoTemplate = (): React.ReactElement => (
  <Information>Information about something important</Information>
)

export const Info = InfoTemplate

const ParagraphTemplate = (): React.ReactElement => (
  <P>Information about something important</P>
)

export const Paragraph = ParagraphTemplate
