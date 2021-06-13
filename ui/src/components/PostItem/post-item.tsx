import React, { FC } from 'react'

import { PostItemProps } from './post-item.types'

export const PostItem: FC<PostItemProps> = ({ text, previewUrl }) => (
  <div>
    <p>{text}</p>
    <img src={previewUrl} alt={text} />
    <button data-testid="reject-post-button" />
    <button data-testid="accept-post-button" />
  </div>
)
