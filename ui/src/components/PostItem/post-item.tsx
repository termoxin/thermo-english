import React, { FC } from 'react'

import CrossIcon from '../../icons/Cross'
import PencilIcon from '../../icons/Pencil'
import TickIcon from '../../icons/Tick'

import { PostItemProps } from './post-item.types'
import { Preview, PostItemContainer } from './styled'

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
    <div>
      <p>{text}</p>
      <p>{likes} likes</p>
    </div>

    {state === 'requested' ? (
      <TickIcon
        data-testid="accept-post-button"
        onClick={() => onAcceptPost && onAcceptPost()}
      />
    ) : (
      <PencilIcon
        data-testid="edit-post-button"
        onClick={() => onEditPost && onEditPost()}
      />
    )}

    <CrossIcon
      data-testid="reject-post-button"
      onClick={() => onRejectPost && onRejectPost()}
    />
  </PostItemContainer>
)
