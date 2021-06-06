import React, { FC } from 'react'

import { PostPageProps } from '../post/post.types'
import { EditingPostLayout } from '../editing-post-layout'

export const CreatePostPage: FC<PostPageProps> = ({ post }) => (
  <EditingPostLayout post={post} />
)
