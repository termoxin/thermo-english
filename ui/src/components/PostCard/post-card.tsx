import React, { FC } from 'react'

import { VideoPlayer } from '../VideoPlayer'
import { WordDetails } from '../WordDetails'

import { PostCardProps } from './post-card.types'
import { PostCardContainer } from './styled'

export const PostCard: FC<PostCardProps> = ({
  videoUrl,
  text,
  transcription,
  meaning,
  previewUrl,
}) => (
  <PostCardContainer>
    <VideoPlayer src={videoUrl} previewUrl={previewUrl} />
    <WordDetails text={text} transcription={transcription} meaning={meaning} />
  </PostCardContainer>
)
