import React, { FC } from 'react'
import { labelStates } from 'ui'

import {
  EditingPostLayout,
  useEditPost,
  buildEditPostLayoutProps,
} from '../../common-components/editing-post-layout'

import { StyledLabel, EditPostContainer } from './styled'
import { PostPageProps } from '../post/post.types'

export const EditPostPage: FC<PostPageProps> = ({ post }) => {
  const editPostState = useEditPost(post)

  return (
    <EditPostContainer>
      {post.state && (
        <StyledLabel state={post.state as labelStates}>
          {post.state.toUpperCase()}
        </StyledLabel>
      )}
      <EditingPostLayout {...buildEditPostLayoutProps(editPostState)} />
    </EditPostContainer>
  )
}
