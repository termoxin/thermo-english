import { ReactionOption } from 'ui'

import { ServerSideProps } from '../../pages/post/[id]'

export interface Post {
  state: string
  videoUrl: string
  previewUrl: string
  transcript: [string, string]
  likes?: number
  question: {
    text: string
    reactions: ReactionOption[]
  }
}

export interface PostPageProps extends ServerSideProps {
  post: Post
}
