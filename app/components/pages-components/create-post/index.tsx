import React, { FC } from 'react'

import { PostPageProps } from '../post/post.types'
import { EditingPostLayout } from '../../common-components/editing-post-layout'
import { useEditPost } from '../../common-components/editing-post-layout/edit-post-layout.hook'
import { buildEditPostLayoutProps } from '../../common-components/editing-post-layout/create-post-layout.util'

export const CreatePostPage: FC<PostPageProps> = () => {
  const editPostState = useEditPost()

  return (
    <div>
      <EditingPostLayout {...buildEditPostLayoutProps(editPostState)} />
    </div>
  )
}
