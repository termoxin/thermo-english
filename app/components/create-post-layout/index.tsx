import React, { FC } from 'react'

import { PostPageProps } from '../post/post.types'
import { EditingPostLayout } from '../editing-post-layout'
import { useCreatePost } from './create-post.hook'
import { CreatePostPageState } from './create-post.reducer'

export const CreatePostPage: FC<PostPageProps> = ({ post }) => {
  const { actions, state } = useCreatePost(post)

  const editingPostLayoutProps = { post: { ...state, state: post.state } }

  return (
    <div>
      <button onClick={() => actions.setQuestion('new question')}>
        Change question
      </button>
      <EditingPostLayout {...editingPostLayoutProps} />
    </div>
  )
}
