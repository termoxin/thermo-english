import React, { FC } from 'react'

import CrossIcon from '../../icons/Cross'
import PencilIcon from '../../icons/Pencil'
import TickIcon from '../../icons/Tick'

import { PostItemProps } from './post-item.types'
import {
  Preview,
  PostItemContainer,
  LikesBlock,
  IconsBlock,
  ContentBlock,
  LikesAndTextBlock,
} from './styled'

export const PostItem: FC<PostItemProps> = ({
  text,
  state,
  likes,
  previewUrl,
  onAcceptPost,
  onRejectPost,
  onEditPost,
}) => (
  <PostItemContainer>
    <Preview src={previewUrl} alt={text} />
    <ContentBlock>
      <LikesAndTextBlock>
        <p>{text}</p>
        {state === 'draft' ||
          (state === 'published' && <LikesBlock>{likes} likes</LikesBlock>)}
      </LikesAndTextBlock>
      <IconsBlock>
        {state === 'requested' ? (
          <TickIcon
            data-testid="accept-post-button"
            width="14"
            height="14"
            onClick={() => onAcceptPost && onAcceptPost()}
          />
        ) : (
          <PencilIcon
            data-testid="edit-post-button"
            width="14"
            height="14"
            onClick={() => onEditPost && onEditPost()}
          />
        )}

        <CrossIcon
          data-testid="reject-post-button"
          width="14"
          height="14"
          onClick={() => onRejectPost && onRejectPost()}
        />
      </IconsBlock>
    </ContentBlock>
  </PostItemContainer>
)
