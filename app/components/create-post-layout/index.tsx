import React, { FC } from 'react'

import { PostPageProps } from '../post/post.types'
import { EditingPostLayout } from '../editing-post-layout'
import { useCreatePost } from './create-post.hook'

export const CreatePostPage: FC<PostPageProps> = () => {
  const { actions, state } = useCreatePost()

  const editingPostLayoutProps: PostPageProps = {
    post: { ...state },
    onChangeQuestion: actions.setQuestion,
    onChangeReactions: actions.setReactions,
    onDeleteReaction: actions.deleteReaction,
    onChangeFirstTranscript: actions.setFirstTranscript,
    onChangeSecondTranscript: actions.setSecondTranscript,
  }

  return (
    <div>
      <EditingPostLayout {...editingPostLayoutProps} />
    </div>
  )
}
