import React, { FC } from 'react'

import { PostPageProps } from '../post/post.types'
import { EditingPostLayout } from '../editing-post-layout'
import { useCreatePost } from './create-post.hook'

export const CreatePostPage: FC<PostPageProps> = ({ post }) => {
  const { actions, state } = useCreatePost(post)

  const editingPostLayoutProps: PostPageProps = {
    post: { ...state, state: post.state },
    onChangeQuestion: actions.setQuestion,
    onChangeReactions: actions.setReactions,
    onDeleteReaction: actions.deleteReaction,
  }

  return (
    <div>
      <EditingPostLayout {...editingPostLayoutProps} />
    </div>
  )
}
