import React, { FC } from 'react'

import { WordDetailsProps } from './word-details.types'
import { Content, Meaning, Text } from './styled'

export const WordDetails: FC<WordDetailsProps> = ({
  text,
  transcription,
  meaning,
}) => (
  <Content>
    <Text>
      {text}
      <span> {transcription} </span>
    </Text>
    <Meaning>{meaning}</Meaning>
  </Content>
)
