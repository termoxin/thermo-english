import React, { FC } from 'react'

import { labelStates } from 'ui'

import { PostPageProps } from '../post/post.types'
import { EditingPostLayout } from '../../common-components/editing-post-layout'
import { useEditPost } from '../../common-components/editing-post-layout/edit-post-layout.hook'
import { StyledLabel, EditPostContainer } from './styled'
import { buildEditPostLayoutProps } from '../../common-components/editing-post-layout/create-post-layout.util'

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
