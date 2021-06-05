import React, { FC } from 'react'

import { PostPageProps } from '../post/post.types'
import { SaveButton, CancelButton, SaveAsDraftButton } from './styled'

export const CreatePostPage: FC<PostPageProps> = () => {
  return (
    <div>
      <div>
        <SaveButton>Save</SaveButton>
        <CancelButton>Cancel</CancelButton>
        <SaveAsDraftButton>Save as draft</SaveAsDraftButton>
      </div>
    </div>
  )
}
