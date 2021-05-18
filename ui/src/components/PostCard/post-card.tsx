import React, { FC } from 'react'

import { VideoPlayer } from '../VideoPlayer'
import { PostCardProps } from './post-card.types'
import { PostCardContainer, Content, Text, Meaning } from './styled'

export const PostCard: FC<PostCardProps> = ({
  videoUrl,
  text,
  transcription,
  meaning,
  previewUrl,
}) => (
  <PostCardContainer>
    <VideoPlayer src={videoUrl} previewUrl={previewUrl} />
    <Content>
      <Text>
        {text}
        <span> {transcription} </span>
      </Text>
      <Meaning>{meaning}</Meaning>
    </Content>
  </PostCardContainer>
)
